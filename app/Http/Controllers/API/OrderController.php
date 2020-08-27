<?php

namespace App\Http\Controllers\API;

use App\Order;

use  App\Models\Palette;

use  App\Models\Discount;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Requests\OrderResquest;
use Illuminate\Support\Facades\Validator;
use App\Rules\instock;


class OrderController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {

    }



    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create($order=null,Request $request)
    {
        $order=Order::find($order);
        $url = "https://test.oppwa.com/";
        $url .= $request->resourcePath;
        $url .= "?entityId=8a8294174b7ecb28014b9699220015ca";

        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, $url);
        curl_setopt($ch, CURLOPT_HTTPHEADER, array(
                       'Authorization:Bearer OGE4Mjk0MTc0YjdlY2IyODAxNGI5Njk5MjIwMDE1Y2N8c3k2S0pzVDg='));
        curl_setopt($ch, CURLOPT_CUSTOMREQUEST, 'GET');
        curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);// this should be set to true in production
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        $responseData = curl_exec($ch);
        if(curl_errno($ch)) {
            return curl_error($ch);
        }
        curl_close($ch);
         $responseData = json_decode( $responseData);

        //  dd($request->all(),$order->items,$responseData);
         if(isset($responseData->id) && isset($responseData->result->description) &&  str_contains($responseData->result->description,'successfully'))
         {
            //  return 'error' ;
            $key['small']="S_avalible";
            $key['medium']='M_avalible';
            $key['large']='L_avalible';

            foreach ($order->items as  $item) {
                $palette  =  Palette::find($item->palatte_id);
                $palette_arr =$palette->toArray();
                $quantity_left =  $palette_arr[$key[$item->size]];
                $sub = $quantity_left - $item->quantity;
                $subcopies=$palette->avalible_copies -  $item->quantity;
                $palette->update([$key[$item->size]=>$sub,'avalible_copies'=>$subcopies]);




             }
             return view('checkout.success',['id'=>$responseData->id]);



         }else
         {
             if(isset($responseData->result->description))
             {
                             return view('checkout.error',['msg'=>$responseData->result->description]);

             }else
             {
                return view('checkout.error',['msg'=>'error accured please contact us ']);

             }
        }

    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(OrderResquest $request)
    {

        // $validator = Validator::make($request->all(), [

        //     ]);
        // app()->setLocale('ar');
        $locale = app()->getLocale();
        // if ( $validator->errors()->count()>0)
        // {
        //     return response()->json(['status'=>false,'errors'=>$validator->errors()->all(),__('orderrequest.failed')]);
        //     // discount_percentage
        // }
        $totalprice =$this->totalprice($request->items,$request->promocode);
        $request['paymentstatus'] = 'pending';
        $request['totalprice'] = $totalprice['totalprice'];
        $request['discount'] = $totalprice['discount_amount'];


        $checkoutid =  $this->get_checkout_id(floatval(str_replace('.',',',$request['totalprice'])));
        if($checkoutid)
        {
            $request['paymentid']=$checkoutid->id ;
        }else
        {
            $request['paymentid']='failed transaction';
            $order = Order::create($request->except('items'));
            $retitems = $this->save_order_items($order,$totalprice['baletteitems']);
            return response()->json(['status'=>false,'errors'=>['transaction request failed and we calling you shortly'],__('orderrequest.failed'),$totalprice, floatval( $request['totalprice'])]);

        }


        $order = Order::create($request->only(['promocode','email','fname','lname','address','apartment','city','postcode','goverment','country','goverment','country','phone','paymentid','paymentstatus','discount','totalprice','payment-transaction-return']));
        $retitems = $this->save_order_items($order,$totalprice['baletteitems']);
        $view = view('ajax.form')->with(['checkoutid' => $checkoutid->id , 'orderid' => $order->id])
        ->renderSections();

        return response()->json(['status'=>true,'data'=>$order,'items'=>$retitems,'checkid'=>$checkoutid->id,'orderid'=>$order->id,$totalprice]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Order  $order
     * @return \Illuminate\Http\Response
     */
    public function show(Order $order)
    {
        //
    }
    public function totalprice($arr=null,$promocode=null)
    {
        $retarr['totalprice']= 0;
        $retarr['items']=[];
        $retarr['discount_amount']=null;

        $retarr['baletteitems']=[];
        $key['small']="S_price";
        $key['medium']='M_price';
        $key['large']='L_price';


        foreach ($arr as &$item) {
            $palette =   Palette::find($item['paletteid']);
               if($palette)
               {

                   $price =$palette->toArray()[$key[$item['palettesize']]];
                   $retarr['totalprice']+= $price * $item['quantity'];

                   $palette_items_data['size']=$item['palettesize'];
                   $palette_items_data['price']=strval( $price);
                   $palette_items_data['quantity']=strval($item['quantity']);
                   $palette_items_data['id']= $palette->id;
                   array_push( $retarr['baletteitems'],$palette_items_data);


                }
        }
            if($promocode)
            {
                $discount = Discount::where('code', '=', $promocode)->first();
                if($discount)
                {
                   $discount =  $discount->discount_percentage;
                   $discount_amount =  $retarr['totalprice'] * ($discount /100);

                   $retarr['totalprice']=   $retarr['totalprice'] -  $discount_amount ;
                   $retarr['discount_amount']=  $discount ;

                }

            }
        return $retarr;
        return count($arr);

    }

    public function save_order_items ($order=null,$arr=null)
    {
        $retarr=[];
        if($order)
        {
            foreach ($arr as &$palette_items_data)
            {

                    $orderitem= $order->items()->create(['size'=>$palette_items_data['size'],'price'=> $palette_items_data['price'] ,'quantity'=>$palette_items_data['quantity'],'palatte_id'=>$palette_items_data['id']]);
                    array_push( $retarr,$orderitem);
            }
            return $retarr;
        }
    }

    public function get_checkout_id($price=0)
    {
        if($price>0)
        {
            $url = "https://test.oppwa.com/v1/checkouts";
            $data = "entityId=8a8294174b7ecb28014b9699220015ca" .
                        "&amount=$price" .
                        "&currency=EUR" .
                        "&paymentType=DB";

            $ch = curl_init();
            curl_setopt($ch, CURLOPT_URL, $url);
            curl_setopt($ch, CURLOPT_HTTPHEADER, array(
                           'Authorization:Bearer OGE4Mjk0MTc0YjdlY2IyODAxNGI5Njk5MjIwMDE1Y2N8c3k2S0pzVDg='));
            curl_setopt($ch, CURLOPT_POST, 1);
            curl_setopt($ch, CURLOPT_POSTFIELDS, $data);
            curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);// this should be set to true in production
            curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
            $responseData = curl_exec($ch);
            if(curl_errno($ch)) {
                return curl_error($ch);
            }
            curl_close($ch);
            if($responseData )
               $responseData =  json_decode($responseData);
            if( $responseData->result->description=='successfully created checkout')
               return $responseData;
            return null ;
        }else
        {
            return null ;
        }

    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Order  $order
     * @return \Illuminate\Http\Response
     */
    public function edit(Order $order)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Order  $order
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Order $order)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Order  $order
     * @return \Illuminate\Http\Response
     */
    public function destroy(Order $order)
    {
        //
    }
}
