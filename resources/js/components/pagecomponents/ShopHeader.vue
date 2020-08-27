<template>
    <section >
        <div id="carouselExampleCaptions" class="carousel slide " data-interval="false">
            <ol class="carousel-indicators text-center">
                <li data-target="#carouselExampleCaptions" v-for="(artist,index) in artists" :class="{ 'active': artist.id == artist_active }" :key="artist.id" @click="getdata(index)" :data-slide-to="index" >{{artist.name}}</li>
            </ol>
            <div class="carousel-inner ">
                <div class="carousel-item" v-for="(artist,index ) in artists" :class="{ 'active':  artist.id === artist_active }" :key="artist.id">
                    <img :src="artist.cover_img" class="header" alt="...">
                <!---------------------------- start regular pallete----------------------- -->

                    <swiper class="agile_swap swap_sm">
                        <swiper-slide class="details agile_slide" v-for="(palettesArtist , index) in artist.artist_palettes" ref="myActive" @click.native="addActive(palettesArtist.id,index)"   :key="palettesArtist.id">
                            <img :src="palettesArtist.artist_min_palettes.img" alt="...">
                            <div class="content" :class="{ 'active': index == 0 }" >
                                <div class="triangle"></div>
                                   <h6><span class="px-1">{{palettesArtist.name}} </span> | <span class="price px-1">${{palettesArtist.M_price}}</span> </h6>
                                        <div class="infor" v-if="palettesArtist.M_avalible >0">    <span><span class="text-success">{{ palettesArtist.M_avalible  }}</span>/{{ palettesArtist.M_copies  }}   {{ $t("message.left") }}</span></div>
                                          <div class="infor" v-else>
                                             <span style="color:red; font-weight:bolder"> {{ $t("message.solidout") }}</span>
                                          </div>
                            </div>
                        </swiper-slide>
                    </swiper>
                    <div class="wrapper swap_lg">
                        <div class=" row  d-flex justify-content-center" style="width:100%">
                            <div  class="details  col-lg-3  col-sm-4"  :class="{ 'active': index == 0 }"  ref="myActive" v-for="(palettesArtist , index) in artist.artist_palettes" @click="addActive(palettesArtist.id,index)"   :key="palettesArtist.id">
                               <div class="details-content">
                                    <img    :src="palettesArtist.artist_min_palettes.img" class="details_img" alt="...">
                                    <div class="content" :class="{ 'active': index == 0 }" >
                                        <div class="triangle"></div>
                                        <h6><span class="px-1">{{palettesArtist.name}} </span> | <span class="price px-1">${{palettesArtist.M_price}}</span> </h6>
                                        <div class="infor" v-if="palettesArtist.M_avalible >0">    <span><span class="text-success">{{ palettesArtist.M_avalible  }}</span>/{{ palettesArtist.M_copies  }}   {{ $t("message.left") }}</span></div>
                                          <div class="infor" v-else>
                                             <span style="color:red; font-weight:bolder"> {{ $t("message.solidout") }}</span>
                                          </div>
                                        <!-- <button  @click="addToCart(palettesArtist)"  class="form-control btn btn-info border-0">{{ $t("message.cart") }}</button> -->
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <!---------------------------- start carousel pallete----------------------- -->

                    <div class="parent swap_sm">
                        <div>
                            <img src="https://cdn.shopify.com/s/files/1/3000/4362/t/109/assets/swipetothenext.png?v=14393615295324639232" alt="">
                        </div>
                        <div class="navigate2 ">
                            <svg viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg"><path fill="#fff" d="M1395 864q0 13-10 23l-466 466q-10 10-23 10t-23-10l-466-466q-10-10-10-23t10-23l50-50q10-10 23-10t23 10l393 393 393-393q10-10 23-10t23 10l50 50q10 10 10 23zm0-384q0 13-10 23l-466 466q-10 10-23 10t-23-10l-466-466q-10-10-10-23t10-23l50-50q10-10 23-10t23 10l393 393 393-393q10-10 23-10t23 10l50 50q10 10 10 23z"></path></svg>
                        </div>

                    </div>

                    <a class="carousel-control-next" href="#carouselExampleCaptions" role="button" @click="getdata(index+1)" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                    </a>
                    <a class="carousel-control-prev " href="#carouselExampleCaptions" role="button" @click="getdata(index-1)" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                    </a>
                </div>
            </div>
        </div>
        <div class="header_sm mb-2"></div>
        <div class="container" style="max-width:1260px!important">
            <div class="row">
                <div class="col-lg-8" style="margin-top:70px">
                    <div class="row">
                        <div class="col-md-6 custom-padding ">
                            <img :src="minPalettesActive.img" style="height:400px" class="w-100"  alt="...">
                        </div>
                        <div class="col-md-6 custom-padding " v-for="minPalette in minPalettes"  :key="minPalette.id" >
                            <img :src="minPalette.img" style="height:400px" class="w-100"  alt="...">
                        </div>
                    </div>
                </div>
                <div class=" col-lg-4" style="margin-top:78px">
                    <div class="add-cart">
                        <h2 class="font-weight-bold ">{{minPalettesActive.name}}
                        <span v-if="active_el==1">${{minPalettesActive.S_price}}</span>
                        <span v-if="active_el==2" style="float: right;font-weight: normal">${{minPalettesActive.M_price}}</span>
                        <span v-if="active_el==3">${{minPalettesActive.L_price}}</span>

                        </h2>
                        <div class="mb-3 mt-2"> <span>{{minPalettesActive.tag}}</span></div>
                        <div>

                            <!-- <v-btn class="mb-2 size_btn small"  :class="{ active_btn : active_el == 1 }" v-if="minPalettesActive.S_avalible>0"  @click="small(1,minPalettesActive.S_price,minPalettesActive.S_avalible,minPalettesActive.id)">S</v-btn>
                            <v-btn class="mb-2 size_btn small" style="cursor: not-allowed;background-color:#737373;color:#fff;border:none" v-else >
                                <div class="rotate"></div>
                                {{ $t("message.empty") }}</v-btn> -->
                            <!-- <v-btn class="mb-2 size_btn medium" :class="{ active_btn : active_el == 2 }" v-if="minPalettesActive.M_avalible>0" @click="medium(2,minPalettesActive.M_price, minPalettesActive.M_avalible ,minPalettesActive.id)">M</v-btn>
                            <v-btn class="mb-2 size_btn small" style="cursor: not-allowed;background-color:#737373;color:#fff;border:none" v-else >
                                <div class="rotate"></div>

                                {{ $t("message.empty") }}</v-btn> -->
                            <!-- <v-btn class="mb-2 size_btn larg" :class="{ active_btn : active_el == 3 }" v-if="minPalettesActive.L_avalible>0" @click="larg(3,minPalettesActive.L_price,minPalettesActive.L_avalible,minPalettesActive.id )">L</v-btn> -->
                            <!-- <v-btn class="mb-2 size_btn small" style="cursor: not-allowed;background-color:#737373;color:#fff;border:none" v-else >
                                <div class="rotate"></div>
                                {{ $t("message.empty") }}</v-btn> -->
                            <!-- <h3 class="mt-4 mb-4" v-if="active_el==1"> <strong style="float:right">{{S_copies}}/{{S_avalible}}  {{ $t("message.left") }}</strong></h3> -->
                            <!-- <h3 class="mt-4 mb-4" v-if="active_el==2">Medium  </h3> -->
                            <!-- <h3 class="mt-4 mb-4" v-if="active_el==3">large<strong style="float:right">{{L_copies}}/{{L_avalible}}  {{ $t("message.left") }}</strong></h3> -->
                            <!-- <h3 class="mt-4 mb-4" v-if="active_el==1"> <strong style="float:right">{{minPalettesActive.S_copies}}/{{minPalettesActive.S_avalible}}  {{ $t("message.left") }}</strong></h3> -->
                            <!-- <h3 class="mt-4 mb-4" v-if="active_el==2"><strong style="float:right">{{minPalettesActive.M_copies}}/{{minPalettesActive.M_avalible}}  {{ $t("message.left") }}</strong></h3> -->
                            <!-- <h3 class="mt-4 mb-4" v-if="active_el==3">large<strong style="float:right">{{minPalettesActive.L_copies}}/{{minPalettesActive.L_avalible}}  {{ $t("message.left") }}</strong></h3> -->
                            <div style="clear:both"></div>
                        </div>
                        <div class="text-center">
                            <button @click="addtocart(minPalettesActive.id,minPalettesActive.M_price, avilableTarget , sizeTarget)" v-if="minPalettesActive.M_avalible>0"  class="btn add-button addToCart ">
                            <!-- <span v-if="active_el==1">${{minPalettesActive.S_price}}</span> -->
                                <span v-if="active_el==2" style="font-size:23px">${{minPalettesActive.M_price}}</span>
                                <!-- <span v-if="active_el==3">${{minPalettesActive.L_price}}</span> -->
                                {{ $t("message.cart") }}

                                </button>
                                <v-btn class="mb-2 size_btn small " style="cursor: not-allowed;background-color:#737373;color:#fff;border:none; margin-bottom:45px!important " v-else >


                                {{ $t("message.solidout") }}</v-btn>
                        </div>
                        <!-- <v-btn class="mb-2 size_btn small" style="cursor: not-allowed;background-color:#737373;color:#fff;border:none" v-else >{{ $t("message.select_size") }}</v-btn> -->

                        <p>
                            <span class="font-weight-bold ">This is the Classic</span>, designed and manufactured by Ecstase,
                            the Classic is made up of a wooden frame, a passe-partout,
                            and non-reflective glass. Each of the artworks chosen for
                            the Classic has been hand made or hand-retouched on art-grade paper,
                            and is delivered already professionally framed to ensure
                            the longevity of the artwork. You can install it as soon as
                            <transition>
                                <span v-if="show">
                                    it is delivered as the artwork comes ready to be hung on your wall.
                                    The classical design and releases in this series make it an elegant
                                    way to add a high-end touch to your space. Each artwork contains
                                    a signed certificate of authenticity that guarantees its originality.
                                    Curated by Ecstase in a collaboration with Seamless for a limited edition of 50.
                                    This psychedelic triple artwork capitalizes on brilliant negative space and amazing detail.
                                </span>
                            </transition>
                            <a class="more text-primary btn btn-block" v-if="!show" @click="show = !show">{{ $t("message.readmore") }}</a>
                            <a class="more text-primary btn btn-block" v-else @click="show = !show">{{ $t("message.readless") }}</a>
                        </p>
                        <ul class="list-group">
                            <li class="list-group-item" @click="size = !size">
                                <h4 class="font-weight-bold ">
                                   {{ $t("message.size") }}
                                    <i v-if="!size" class="fa fa-chevron-down" style="float:right"></i>
                                    <i v-else class="fa fa-chevron-up" style="float:right"></i>
                                </h4>
                                <span v-if="size">
                                    {{minPalettesActive.sizing_details}} CM
                                </span>
                            </li>
                            <li class="list-group-item" @click="details = !details">
                                <h4 class="font-weight-bold ">

                                   {{ $t("message.productDetails") }}
                                    <i v-if="!details" class="fa fa-chevron-down" style="float:right"></i>
                                    <i v-else class="fa fa-chevron-up" style="float:right"></i>
                                </h4>
                                <span v-if="details">
                                    {{minPalettesActive.frame_material}}
                                </span>
                            </li>
                            <li class="list-group-item" @click="shipping = !shipping">
                                <h4 class="font-weight-bold ">
                                     {{ $t("message.shipping") }}
                                    <i v-if="!shipping" class="fa fa-chevron-down" style="float:right"></i>
                                    <i v-else class="fa fa-chevron-up" style="float:right"></i>
                                </h4>
                                <span v-if="shipping">
                                    {{minPalettesActive.frame_finish}}
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <appvideo></appvideo>
        <review></review>
    </section>
</template>

<script>
import appvideo from '../pagecomponents/ShopVideo';
import review from '../pagecomponents/Review';
import $ from "jquery";
import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper'

export default {
    components:{
            appvideo,
            review,
            Swiper,
            SwiperSlide
        },
          directives: {
    swiper: directive
  },
    data(){
        return {
            palettes:[],
            minPalettes:[],
            artists:[],
            palettesArtists:[],
            show: false,
            size:false,
            details:false,
            shipping:false,
            id:'',
            minPalette_id:'',
            first:null,
            firstpalettesArtists:null,
            firstminPalettes:null,
            minPalettesActive:{},
            active_el:2,
            priceTarget:'',
            avilableTarget:'',
            sizeTarget:'medium',
            button:false,
            artistID:'',
            sizeCm:"",
            artist_text:'',
            artist_active:'',

        }
    },mounted(){


            var swiper = new Swiper('.swiper-container', {
                slidesPerView: 3,
                spaceBetween: 30,
                freeMode: true,
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },
                breakpoints: {
                // when window width is >= 320px
                320: {
                    slidesPerView: 2,
                    spaceBetween: 20
                    },
                    640:{
                        slidesPerView:1
                    },
                    // when window width is >= 640px
                991: {
                    slidesPerView: 2,
                    spaceBetween: 30
                    }
                },
                observer:true,
                observerParents:true,

            });
            // swiper.update();
        },


    created() {

        if(this.$route.query.mydata)
        {

        axios.get('/api/palettes')
        .then(response =>{
          this.artists = response.data.artists
          this.artist_text = response.data.artists[0].Plates_description
          this.first = response.data.artists[0].id
        axios.get("/api/view?id="+ this.$route.query.mydata)
        .then(response =>{
            this.minPalettesActive=response.data.palettesActive[0],
            this.palettesArtists = response.data.palettesArtists
        })

        .catch(error => console.log(error.response.data))

      }

    ).catch(error => console.log(error.response.data));

            //this.addActive(this.$route.query.mydata)
            axios.get("/api/viewMinPalettes?id=" + this.$route.query.mydata)
            .then(response =>{
                this.minPalettes = response.data.minPalettes

                })
            .catch(error => console.log(error.response.data))
            axios.get("/api/artist?id=" + this.$route.query.mydata)
                .then(response =>{
                    this.artist_active = response.data.artist[0].id
                })
                .catch(error => console.log(error.response.data))
        }else{

      axios.get('/api/palettes')
      .then(response =>{
          this.artists = response.data.artists
          this.first = response.data.artists[0].id
          this.artist_active = this.first;
          this.artist_text = response.data.artists[0].Plates_description
        axios.get("/api/view?id="+ this.first)
        .then(response =>{
            this.palettes = response.data.palettes
            this.minPalettesActive=response.data.palettes[0],
            this.palettesArtists = response.data.palettesArtists
            this.firstpalettesArtists = response.data.palettesArtists[0].id
            axios.get("/api/viewMinPalettes?id=" + this.firstpalettesArtists)
            .then(response =>{
                this.minPalettes = response.data.minPalettes
                })
            .catch(error => console.log(error.response.data))
        })
        .catch(error => console.log(error.response.data))
      }

    ).catch(error => console.log(error.response.data));
        }
    },

      computed: {
        cart() {
            return this.products.filter(product => product.quantity > 0);
        },
        totalQuantity() {
            return this.products.reduce(
            (total, product) => total + product.quantity,
            0);

        },
        // swiper(){
        //     return this.$refs.mySwiper.$swiper
        // }
      },
    methods:{

        addToCart(product){

            this.$store.dispatch('addProductToCart',{
                 product,
                quantity:1
            })
        
        }
        ,
         updateCart(product, updateType) {
        for (let i = 0; i < this.products.length; i++) {
          if (this.products[i].id === product.id) {
            if (updateType === 'subtract') {
              if (this.products[i].quantity !== 0) {
                this.products[i].quantity--;
              }
            } else {
              this.products[i].quantity++;
            }

            break;
          }
        }
      }
      ,
        getdata($id){
            // let id = 0;
            if(this.artists[$id])
            {
                $id = this.artists[$id].id
            } else if($id > this.artists.length-1)
            {
             $id = this.artists[0].id;
            }
            else{
                $id = this.artists[this.artists.length-1].id;
            }
            axios.get("/api/view?id=" +$id)

            .then(response =>{

            this.palettes = response.data.palettes
            this.artist_text = response.data.artist[0]
            this.minPalettesActive=response.data.palettes[0]
            if(this.minPalettesActive == null)
            {
                this.minPalettesActive = ''
            }
            if(response.data.palettesArtists.length>0){
                this.firstminPalettes = response.data.palettesArtists[0].id
            } else {
                this.firstminPalettes = null
            }

            axios.get("/api/viewMinPalettes?id=" + this.firstminPalettes)
                .then(response =>{
                    this.minPalettes = response.data.minPalettes
                    })
                .catch(error => console.log(error.response.data))
        })
        .catch(error => console.log(error.response.data))
                   
                  

        },
        small(el,price,avilable,cardId){
            this.sizeTarget="small"
            this.avilableTarget=avilable;
            this.active_el = el;
            this.priceTarget=price
            this.button=true;
            this.sizeCm="30x40cm (12x16)"

            //  $(".details .details_img").css({
            //      transform:"scale(1)"
            //  })

            // $(".details .content").css({marginTop:"27px"})

            $(".details.active .details_img").css({
                transform:"scale(.7)"
            })
            $(".details.active .content").css({marginTop:"-27px"})
        },
        medium(el,price,avilable,cardId){
            this.sizeTarget="medium"
            this.avilableTarget=avilable;
            this.active_el = el;
            this.priceTarget=price
            this.button=true;
            this.sizeCm="50x66.5cm (20x26)"

            //  $(".details .details_img").css({
            //      transform:"scale(1)"
            //  })
            // $(".details .content").css({marginTop:"27px"})

            // $(".details.active .details_img").css({
            //     transform:"scale(.8)"
            // })
            // $(".details.active .content").css({marginTop:"-17px"})

        },
        larg(el,price,avilable,cardId){
             this.sizeTarget="large"
            this.avilableTarget=avilable;
            this.active_el = el;
            this.priceTarget=price
            this.button=true;
            this.sizeCm="70x93.5cm (28x37)"

             $(".details.active .details_img").css({
                 transform:"scale(1)"
             })
                 $(".details.active .content").css({marginTop:"27px"})


        },
        addActive($minPalette_id,index){
            // console.log(  this.$refs.myActive)
            let myActive =  this.$refs.myActive[index]
                       $(myActive).addClass('active').siblings().removeClass('active');

        $(".details").on("click",function(){
                  $(this).addClass('active').siblings().removeClass('active');
        })


            $("html,body").animate({
                scrollTop:"450px"
            },500)

                axios.get("/api/viewMinPalettes?id=" + $minPalette_id)
                .then(response =>{
                    this.minPalettes = response.data.minPalettes
                    this.minPalettesActive=response.data.palettes[0]
                    })
                .catch(error => console.log(error.response.data))

        },
        addtocart($id,price,avilableTarget, sizeTarget,sizeCm){


            $(".modal-mask").css("left",0)
            $(".modal-cart-footer").addClass("animation","i 1s ")
            setTimeout(()=>{
                $(".modal-mask").css("backgroundColor","rgba(0,0,0,.5)")
            },800)
            axios.post('/api/addtocart?id=' + $id)
            .then(res=>{

            // console.log(res.data.paletteCart)

                // $('#count')[0].innerText++

           let product=  res.data.paletteCart

           if(sizeTarget=='large')
           {
               if(this.minPalettesActive.L_avalible<=0)
               {

                this.minPalettesActive.L_avalible=0;
                return
               }
               --this.minPalettesActive.L_avalible;
           }else if(sizeTarget=='small')
           {
                if(this.minPalettesActive.S_avalible<=0)
               {
               this.minPalettesActive.S_avalible =  0;
               return
               }
                --this.minPalettesActive.S_avalible;

           }else{
             if(this.minPalettesActive.M_avalible<=0)
               {
                    this.minPalettesActive.M_avalible=0;
                    return

               }
               --this.minPalettesActive.M_avalible;

           }
            this.$store.dispatch('addProductToCart',{
                 product,
                quantity:1,
                price:price,
                avilableTarget,
                sizeTarget,
                sizeCm

            })
            }).catch(error => console.log(error))

        },//lklk


    },//method
    watch:{
    $route (to, from){

        this.addActive(this.$route.query.mydata)
        axios.get("/api/viewMinPalettes?id=" + this.$route.query.mydata)
        .then(response =>{

            this.minPalettes = response.data.minPalettes
            // console.log(this.$route.query.mydata );

            })
        .catch(error => console.log(error.response.data))
            axios.get("/api/artist?id=" + this.$route.query.mydata)
        .then(response =>{
            this.artist_active = response.data.artist[0].id
        })
        .catch(error => console.log(error.response.data))

    }
}

}




</script>


<style scoped>


    .carousel-item .header{
        width: 100%;
        height: 640px;
    }
    @media (max-width:767px)
    {
        .carousel-item .header{
            height: 610px;
                transform: scale3d(4.5, 1.5, 1.5);
        }
    }
    .header_sm{
        background-image: url('https://cdn.shopify.com/s/files/1/3000/4362/files/turrell_mobile_final_post_3_2048x.jpg?v=1565189502');
        -webkit-background-size: cover;
        -moz-background-size: cover;
        -o-background-size: cover;
        background-size: cover;
        height: 300px;
        background-position: center;
        position: relative;
        display: none;
    }

    .wrapper{
        position: absolute;
        top: -3%;
        transform: translate(-50%, 0);
        left: 52%;
        width: 100%;
    }

    @media(max-width:991px){
        .header_sm{
            display: none;
        }
        .wrapper{
            left: 48%;
        }
    }
    .details{
    color: #fff;
    cursor: pointer;
    transition: all 1s;


    }
    .details img{
        width: 83%;
        transition: all 1s;
        height: 400px;
        border-top: 8px solid #111;
        border-bottom: 8px solid #111;
    }
 .wrapper .row{
         transform: scale(.5);

        }
    .wrapper .details .content{
        position: relative;
        font-size: 14px;
        width: 83%;
        margin-top: 34px;
        /* margin: 16px auto 0; */
        padding: 6px 5px;
        transition: all .5s;
        color:white;
        border-radius: 10px;
          background: rgba(0,0,0,0.75);
        background-repeat: no-repeat;
        background-position: 50%;
        background-size: 100%;
        z-index: 2;
        top: 10px;
        padding: 0 20px;
        border: 4px solid rgba(0,0,0,-7.25);
    }

    .wrapper .details .content .triangle{
   position: relative;
    z-index: 1;
    /* padding: 10px; */
    display: inline-block;
    top: -29px;
    left: 50%;
    background: url(https://cdn.shopify.com/s/files/1/3000/4362/t/109/assets/icon.png);
    transform: rotate(0) scale(2.3) translate(-16%, 19%);
    /* background: rgba(0,0,0,0.9); */
    width: 22px;
    height: 10px;
    }

    /* .details.active .triangle{
            top: -26.1px;

    } */
    /* .wrapper .details .content:hover{
        border: 2px solid #00a4ee;
    } */

    /* .details-content{
        margin:20px;
    } */
    .details:hover {
        transform: scale(1.1);
    }
    .add-cart {
        padding-left:50px ;
    }
    .add-cart div span{
        font-size: 15px;
        font-weight: 400;
        line-height: 22px;
        display: inline-block;
        margin-right: 5px;
        padding: 0 10px;
        text-transform: lowercase;
        color: #fff;
        border-radius: 999px;
        background-color: #000;
    }
    .add-cart p{
        font-size: 20px;
    }
    .add-cart .add-button{
        font-size: 20px;
        font-weight: 700;
        line-height: 70px;
        display: block;
        width: 100%;
        margin-bottom: 40px;
        cursor: pointer;
        text-align: center;
        text-decoration: none;
        color: #fff;
        border: none;
        background-color: #000;
    }
    .add-cart .more{
        outline: none;
    }
    .list-group .list-group-item{
        cursor: pointer;
        border-left: none;
        border-right: none;
        padding-left: 10px;
        padding-right: 10px;
    }
     .list-group {

        padding-left: 0;

    }
/*
    .carousel-control-prev{
        left: -50%;
    } */
.carousel-indicators li {
    box-sizing: content-box;
    -ms-flex: 0 1 auto;
    flex: 0 1 auto;
    width: 67px;
    height: 29px;
    margin-right: 14px;
    margin-left: 0;
    text-indent: 0;
    cursor: pointer;
    color: black;
    background: none;
}
.carousel-indicators{
    bottom: -9%;
    width: 100%;
    background-color: #f5f0ed;
    margin-left: 0;
    margin-right: 0;
}
@media(max-width: 991px){
    .carousel-indicators{
        bottom: -8%
    }
}
.carousel-indicators .active{
    border-bottom: 3px solid #00aeef;
}
.small, .medium, .larg{
    padding:40px 120px !important ;
    margin-right: 20px !important;
    font-size: 20px ;
}
 .details.active .content {
    border: 4px solid #00a4ee;
}
 .details.active .triangle {
      background: url(https://cdn.shopify.com/s/files/1/3000/4362/t/109/assets/icon-active.png) !important;
}
.active_btn{
    border: 2px solid #00a4ee;
}
.content h6 ,.content  span{
font-size: 2rem;
}

.price{
   font-size: 1.6rem!important ;
}


.infor{
top: -12px;
left: -20px;
position: relative;
transform: scale(0.80);

}

/* Start Responsive */
@media (max-width: 1264px){
 .wrapper .row{
        position: absolute;
        /* top: -230px; */

        left: 51px;
    transform: scale(0.4);

    }
    .details-content{
    /* margin: 10px 30px ; */
    }
}

@media (max-width: 960px){
 .wrapper .row{
        transform: scale(.4);
    }
    .details-content{
    /* margin: 10px 50px ; */

    }
    .infor[data-v-266b1872] {
    left: 0;
    position: relative;
    transform: scale(.9);
}


.wrapper .details img{
    width: 100%;
}
.wrapper .details .content{
    width: 100%;
}

}


@media (max-width: 880px){
 .wrapper .row{
        transform: scale(.4) ;
        display: flex;
        justify-content: space-evenly!important;
    }
    .details-content{
    /* margin: 10px 50px ; */
    margin-right: -18px;

    }
    .infor[data-v-266b1872] {
    left: 8px;
    position: relative;
    transform: scale(.9);
}
.wrapper .details{
    width: 300px !important;
}

.wrapper .details img{
    width:93%;
}
.wrapper .details .content{
    width: 93%;
}

}
.navigate2 {
    margin: 30px 0;
    text-align: center;
}
.navigate2 svg{
    animation: e 2s infinite;
    width: 28px;
}

@keyframes e{0%,20%,50%,80%,to{transform:translateY(0)}40%{transform:translateY(-10px)}60%{transform:translateY(-5px)}}
.parent{
    position: absolute;
    top: 450px;
    left: 50%;
    transform: translate(-50%,0);

}
.parent img{
  width: 170px;
}

.agile_swap {
    /* position: absolute; */
    /* top: 100px; */
    /* left: 50%;
    transform: translate(50%,0); */
    position: absolute;
    text-align: center;
    /* top:2%; */
    /* transform: scale(.9); */
}
.agile_swap  img{
    width: 37%;
    margin-top: 80px;
    border-top: 4px solid #111;
    border-bottom: 4px solid #111;
}
/*
.pallete-swiper .swiper-pagination{
    display: none;
}
.agile_swap  .agile_slide {
    width: 77% !important;

} */
.swiper-wrapper{
    /* left: 44px; */
}

.agile_swap  .content{
 position: relative;
        font-size: 14px;
        width:  68%;
        margin-top: 34px;
        /* margin: 16px auto 0; */
        padding: 6px 5px;
        transition: all .5s;
        color:white;
        border-radius: 10px;
        background: rgba(0,0,0,0.75);
        top: 18px;
        padding: 0 20px;
        border: 4px solid rgba(0,0,0,-7.25);
        left:50%;
        transform: translate(-50%,-50%) scale(.5);

}

.agile_swap  .content .triangle{
    position: relative;
    z-index: 1;
    /* padding: 10px; */
    display: inline-block;
    top: -29px;
    left: 50%;
    background: url(https://cdn.shopify.com/s/files/1/3000/4362/t/109/assets/icon.png);
    transform: rotate(0) scale(2.3) translate(-316%, 18%);
    /* background: rgba(0,0,0,0.9); */
    width: 22px;
    height: 10px;

}
@media (max-width: 414px){
    .agile_swap  .content .triangle{
        left: 63% !important;
    }
    .agile_swap  img{
      height: 215px !important;
    width: 170px !important;
    }
    .parent{
        top: 430px;
        left: 52%;
    }
    .agile_swap  .content{
        width:  246px !important;

    }
    .agile_swap  .content .triangle{
            left: 65% !important;
    }
}

.rotate{
 width: 100%;
    position: relative;
    height: 82px;
    transform: rotate(49deg);
    background: black;
}

.carousel-indicators li{
    width: auto;
    padding: 0 10px;
}

.custom-padding:nth-child(odd){
    padding-right: 5px !important;
     padding-left: 20px !important;
    padding-bottom: .3px !important;

}

.custom-padding:nth-child(even){
    padding-right: 20px;
    padding-left: 5px!important;
    padding-bottom: .3px;
}
.swap_sm{
    display: none;
}
@media(max-width: 767px){
    .custom-padding:nth-child(odd){
        padding-right: 11px !important;
        padding-left: 11px !important;
        padding-bottom: .3px !important;
    }

    .custom-padding:nth-child(even){
        padding-right: 11px;
        padding-left: 11px!important;
        padding-bottom: .3px;
    }
    .add-cart[data-v-266b1872] {
        padding-left: 6px;
    }

    .swap_sm {
        display: block;
    }
    .swap_lg{
        display: none;
    }
    .agile_swap .agile_slide{
        position: relative;
        left: -15.7% !important;
    }
}

.swiper-container{
    margin-bottom: 50px;
}
.agile_swap{
    position: absolute;
    top: 1%;
    left: 16%;
    width: 100%;
}
.agile_swap img{
    height: 250px;
    width: 189px;
}
.agile_swap .content{
    width: 331px;
}
.agile_swap .agile_slide{
    position: relative;
    left: -11%;
}


</style>
