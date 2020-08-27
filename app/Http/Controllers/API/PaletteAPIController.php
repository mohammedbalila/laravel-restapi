<?php

namespace App\Http\Controllers\API;

use App\Http\Requests\API\CreatePaletteAPIRequest;
use App\Http\Requests\API\UpdatePaletteAPIRequest;
use App\Models\Palette;
use App\Repositories\PaletteRepository;
use Illuminate\Http\Request;
use App\Http\Controllers\AppBaseController;
use App\Models\Artist;
use App\Models\Review;
use App\Models\Paletteimage;
use Response;

/**
 * Class PaletteController
 * @package App\Http\Controllers\API
 */

class PaletteAPIController extends AppBaseController
{
    /** @var  PaletteRepository */
    private $paletteRepository;

    public function __construct(PaletteRepository $paletteRepo)
    {
        $this->paletteRepository = $paletteRepo;
    }

    /**
     * Display a listing of the Palette.
     * GET|HEAD /palettes
     *
     * @param Request $request
     * @return Response
     */
    public function index()
    {
        $arr=[];
        $artists = Artist::all();
        $palettesSlider = Palette::all();
        foreach ($palettesSlider as $item) {
            $myitem= $item-> images->first();
            if($myitem)
            {
                 $item->extraimg = $myitem ;
            }else
            {
                $item->extraimg  =  'https://previews.123rf.com/images/eyematrix/eyematrix1712/eyematrix171200014/91720468-used-artists-paint-brushes-different-colors-on-palette-background.jpg';
            }

        } //add extra img attr  for slider img

        foreach ($artists as $key=>$item) {

            $palettesArtists = Palette::where('artist_id',$item->id)->limit(3)->get();
            $item->key=$key;
            if($palettesArtists)
            {
                foreach($palettesArtists as $item2)
                {                    
                    $minPalettes = Paletteimage::where('palatte_id',$item2->id)->first();
                    if($minPalettes){
                        $item2->artist_min_palettes = $minPalettes ;
                    }else
                    {
                        $item2->artist_min_palettes  = [];
                    }
                }
                 $item->artist_palettes = $palettesArtists ;
            }else
            {
                $item->artist_palettes  = [];
            }

        }
        


        return response()->json(['artists' => $artists,'palettesSlider' =>$palettesSlider]);

    }

        /**
     * Display a listing of the Palette.
     * GET|HEAD /palettes
     *
     * @param Request $request
     * @return Response
     */
    public function hover($id=null )
    {
        $palette = Palette::find($id);
        if($palette)
        {
           $hove_image=  $palette->images->first();
            return response()->json([ 'status'=>true,'hover_image'=>$hove_image]  );

        }else
        return response()->json([ 'status'=>false,'error'=>'error acccured']  );
    }

    public function artist(Request $request){
        $palette = Palette::find($request->id);
        $artist = Artist::where('id',$palette->artist_id)->get('id');
        return response()->json(['artist'=>$artist]);   
    }

    public function getReviews(){
        return Review::latest()->paginate(3);
        // return response()->json(['review' => $review]);
    }
    public function Palettes(Request $request){
        $artist = Artist::where('id',$request->id)->pluck('Plates_description');
        $palettesArtists = Palette::where('artist_id',$request->id)->limit(3)->get();
        $palettes = Palette::where('artist_id',$request->id)->limit(5)->get();
        $palettesActive = Palette::where('id',$request->id)->limit(1)->get();
        return response()->json([ 'palettesArtists' =>$palettesArtists,'palettes' =>$palettes,'artist'=>$artist,'palettesActive'=>$palettesActive]);

    }
    public function viewMinPalettes(Request $request){

        $palettes = Palette::where('id',$request->id)->get();
        $minPalettes = Paletteimage::where('palatte_id',$request->id)->limit(5)->get();
        return response()->json(['minPalettes' => $minPalettes,'palettes' =>$palettes]);
    }
    public function addtocart(Request $request) {
        $paletteCart = Palette::find($request->id);
        if($paletteCart){
            $paletteCart->addtocart =1;
            $paletteCart->save();
            return response()->json(['paletteCart' =>$paletteCart]);
        }
    }
    public function removefromcart(Request $request) {
        $paletteCart = Palette::find($request->id);
        if($paletteCart){
            $paletteCart->addtocart =0;
            $paletteCart->save();
            return response()->json(['paletteCart' =>$paletteCart]);
        }
    }
    public function getpallatecart() {
        $palettes = Palette::where('addtocart',1)->get();
        return response()->json(['palettes' =>$palettes]);

    }
    /**
     * Store a newly created Palette in storage.
     * POST /palettes
     *
     * @param CreatePaletteAPIRequest $request
     *
     * @return Response
     */
    public function store(CreatePaletteAPIRequest $request)
    {
        $input = $request->all();

        $palette = $this->paletteRepository->create($input);

        return $this->sendResponse($palette->toArray(), 'Palette saved successfully');
    }


    /**
     * Display the specified Palette.
     * GET|HEAD /palettes/{id}
     *
     * @param int $id
     *
     * @return Response
     */
    public function show(Request $request)
    {
        $palettes = Palette::where('artist_id',$request->id)->get();
        return response()->json(['palettes' =>$palettes]);
    }

    /**
     * Update the specified Palette in storage.
     * PUT/PATCH /palettes/{id}
     *
     * @param int $id
     * @param UpdatePaletteAPIRequest $request
     *
     * @return Response
     */
    public function update($id, UpdatePaletteAPIRequest $request)
    {
        $input = $request->all();

        /** @var Palette $palette */
        $palette = $this->paletteRepository->find($id);

        if (empty($palette)) {
            return $this->sendError('Palette not found');
        }

        $palette = $this->paletteRepository->update($input, $id);

        return $this->sendResponse($palette->toArray(), 'Palette updated successfully');
    }

    /**
     * Remove the specified Palette from storage.
     * DELETE /palettes/{id}
     *
     * @param int $id
     *
     * @throws \Exception
     *
     * @return Response
     */
    public function destroy($id)
    {
        /** @var Palette $palette */
        $palette = $this->paletteRepository->find($id);

        if (empty($palette)) {
            return $this->sendError('Palette not found');
        }

        $palette->delete();

        return $this->sendSuccess('Palette deleted successfully');
    }
}
