<template>
    <nav class="navbar navbar-expand-lg navbar-light px-3 sticky-top">
        <button class="navbar-toggler" type="button" @click="expanding()" aria-controls="navbarTogglerDemo03" :aria-expanded=expand aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <a class="navbar-brand" href="/"><img class="logo-ecs" src="images/naqsh.png" width="32px" alt=""></a>
        <button class="nav-btns nav_sm_btn" @click="showsModal()">
            <img src="//cdn.shopify.com/s/files/1/3000/4362/t/109/assets/nav_icons_bag.svg?v=8412811641524949656" @click="showsModal()" alt="Shopping Cart" width="33px">
            <span id="count">{{cartItemCount}}</span>
        </button>
        <div class="lang_lg">
            <LanguageDropdown class="lang"></LanguageDropdown>
        </div>

        <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
            <ul class="navbar-nav  mx-auto mt-2 mt-lg-0" v-if=" $i18n.locale == 'en'">
                <li class="nav-item home" style="width:50px">
                    <router-link to="/">
                        <a class="nav-link"> {{ $t("message.home") }}<span class="sr-only">(current)</span></a>
                    </router-link>
                </li>
                <li class="nav-item shop shop_sm">
                    <router-link to="/shop">
                        <a class="nav-link">{{ $t("message.shopart") }}</a>
                    </router-link>
                </li>
                <li class="nav-item about"  style="width:50px">
                    <router-link to="/about">
                        <a class="nav-link">{{ $t("message.about") }}</a>
                    </router-link>
                </li>
                <li class="lang_sm about">
                   <LanguageDropdown class="nav-link" style="display: flex;"></LanguageDropdown>
                </li>
            </ul>
            <ul class="navbar-nav  mx-auto mt-2 mt-lg-0" v-else>
                <li class="nav-item about about_sm">
                    <router-link to="/about" class="lg">
                        <a class="nav-link">{{ $t("message.about") }}</a>
                    </router-link>
                    <router-link to="/" class="sm">
                        <a class="nav-link"> {{ $t("message.home") }}<span class="sr-only">(current)</span></a>
                    </router-link>
                </li>

                <li class="nav-item shop shop_sm">
                    <router-link to="/shop">
                        <a class="nav-link">{{ $t("message.shopart") }}</a>
                    </router-link>
                </li>
                <li class="nav-item home home_sm">
                    <router-link to="/" class="lg">
                        <a class="nav-link"> {{ $t("message.home") }}<span class="sr-only">(current)</span></a>
                    </router-link>
                    <router-link to="/about" class="sm">
                        <a class="nav-link">{{ $t("message.about") }}</a>
                    </router-link>
                </li>
                <li class="lang_sm about">
                   <LanguageDropdown class="nav-link" style="display: flex;"></LanguageDropdown>
                </li>
            </ul>
        </div>
        <button class="nav-btns nav_lg_btn" @click="showsModal()">
            <img src="//cdn.shopify.com/s/files/1/3000/4362/t/109/assets/nav_icons_bag.svg?v=8412811641524949656" @click="showsModal()" alt="Shopping Cart" width="33px">
            <span id="count">{{cartItemCount}}</span>
        </button>
        <div>
            <transition name="modal">
                <div class="modal-mask" ref="mycart">
                    <div class="modal-wrapper"  >
                        <div class="modal-dialog" role="document">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title"> {{ $t("message.cartname") }}</h5>
                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true" @click="closeModal()">
                                            <svg role="presentation" viewBox="0 0 16 14">
                                                <path d="M15 0L1 14m14 0L1 0" fill="none" fill-rule="evenodd"></path>
                                            </svg>
                                        </span>
                                    </button>
                                </div>
                                <div class="modal-body" >
                                    <p class="cart-empty" v-if="cartItemCount==0">Your cart is empty.</p>
                                    <!-- -----------------------------pallalet cart----------------- -->
                                    <div class="row p-4 mt-2 border-bottom"
                                        v-for="(item,index) in cart "
                                        :key="item.id">
                                        <div class="col-md-sm-4 ml-1">
                                            <img :src="item.product.img">
                                        </div>
                                        <div class="col-md-sm-8 ml-3 ">
                                            <span class="move move1"> <strong>{{ item.product.name }}</strong></span>
                                            <!-- <h6  style="font-size:14px">{{ item.sizeTarget }}  {{item.sizeCm}} </h6> -->
                                            <h6 class="move" style="margin-top:10px"> ${{item.price}}.00</h6>
                                            <v-form class="control-increse" style="width:50%;display:inline-block">
                                                <v-text-field  v-model=" item.quantity  ">
                                                    <v-icon slot="append" @click="addToCart(item.product )">mdi-plus</v-icon>
                                                    <v-icon slot="prepend"  @click.prevent="decreaseProduct(item.product)"  >mdi-minus</v-icon>
                                                </v-text-field>
                                            </v-form>
                                        </div>
                                        <div class="pro">
                                            <button class="ml-3 btn delete " @click.prevent="clearProductFromCart(index)"> {{ $t("message.remove") }}</button>
                                        </div>
                                    </div>
                                </div>
                                <div class="modal-footer modal-cart-footer" v-if="cartItemCount>0">
                                    <router-link style="margin: auto;color: #fff;"
                                        :to="{ path: '/payment', query: { myprop: this.pallatecart }}">
                                        <button type="button" class="btn checkout" style="font-size: 18px;"> {{ $t("message.total") }} : $ {{cartTotalPrice}} &nbsp;  <strong>.</strong> &nbsp;  {{ $t("message.checkout") }}</button>
                                    </router-link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </transition>
        </div>
    </nav>
</template>

<script>

import "jquery"
import LanguageDropdown from './LanguageDropdown';
export default {

    computed: {
    cartTotalPrice() {
      return this.$store.getters.cartTotalPrice;
    },
    cart() {
      return this.$store.state.cart;
    },
    cartItemCount(){
      return this.$store.getters.cartItemCount
    }
  },
    components:{LanguageDropdown},
    data(){
        return {
            showModal: false,
            value:1,
            pallatecart:[],
            cartcount:'',
            expand:false,
            mycart:''
        }
    },
    mounted(){
this.mycart=$(".modal-wrapper")
        // let infoUrl = window.location.href
        // let infoUrlTarget =infoUrl.split('/').slice(-1)[0]
        // $("."+infoUrlTarget).addClass('active').siblings().removeClass('active')
        // console.log("."+infoUrlTarget)

        axios.get('/api/getpallatecart')
        .then(res=>{
            this.cartcount = res.data.palettes.length
            this.pallatecart=res.data.palettes
            })
        .catch(error => console.log(error.response.data))
    },
    methods:{
        closeModal(){

            let mycarts=this.$refs.mycart
            $(mycarts).css({
                left:"100%",
                backgroundColor:"transparent"
            })
             $(".modal-cart-footer").removeClass("animation","i 1s ")
        },
        showsModal(){

            let mycarts=this.$refs.mycart
            $(mycarts).css("left",0)
            setTimeout(()=>{
                $(mycarts).css("backgroundColor","rgba(0,0,0,.5)")
            },800)
              $(".modal-cart-footer").addClass("animation","i 1s ")

        }
        ,

        expanding(){
            this.expand=!this.expand;
            $(".navbar-collapse").toggleClass("show")
        },
           decreaseProduct(product){

            this.$store.dispatch('decreaseProduct',{
                 product,
                quantity:1
            })
        },
         addToCart(product){
            this.$store.dispatch('addProductToCart',{
                 product,
                quantity:1
            })
        },
         clearProductFromCart(index){
      this.$store.dispatch("deleteCartItem",index)
    },
    clearCartItems(){
      this.$store.dispatch("clearCartItems")
    },

        plus($id){
            this.value +=1
        },
        minus(){
            this.value -=1
            if(this.value <= 0){
                this.value = 0
            }
        },
        remove($id){
            axios.post('/api/removefromcart?id='+ $id)
            .then(res => {
                this.pallatecart.splice(res.data.paletteCart,1)
                $('#count')[0].innerText--;
                })
            .catch(error => console.log(error.response.data))
        }
    }
}
</script>

<style>
.modal-mask {
  position: fixed;
  top: 0;

  left: 100%;
  width: 100%;
  display: none;

  display: block;
  transition: left .8s , backgroundColor 0s;

}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
  float: right;
  position: relative;

  transition: all 1s;
  top: 67px;
  /* left: 15px; */
}

.modal-content{
    top: -26px;
    overflow: scroll;
    width: 436px;
    min-height: 685px;
    border-radius: 0;
    left: 4%;
    background: #f2efeb;


}
@media(min-width:768px){
    .modal-content{
        top: -95px;
    }
}
@media(min-width:991px)
{
    .modal-content{
        min-height: 860px;
    }
}
.modal-body {
    position: relative;
    -ms-flex: 1 1 auto;
    max-height: 680px;
    flex: 1 1 auto;
    overflow: auto;
    padding: 1rem;
}
/* .modal-body{
    position: absolute;
    width: 400px;
        overflow: scroll;
} */
.modal-body img{
    width: 80px;
    height: 80px;
}

.pro{
    width: 124%;
}
.pro button {
    margin-top:-37px ;

}

/* @media(max-width:996px){

    li.nav-item{
        width: 67px;
    }
} */
/* .nav-btns{
    margin-left: 27px;
} */

.delete{
     width: 90px !important;
    float: right;
}
.navbar-brand img{
    width: 42px;
}
.v-text-field>.v-input__control>.v-input__slot:before {
    border-style: none !important;
}

.theme--light.v-input{
    border: 1px solid #cfcfcf;
    padding:8px 10px 1px;
}
.v-text-field>.v-input__control>.v-input__slot:before {
    border-color: inherit;
    border-style: dashed !important;
    border-width:  0 0 !important;
}
.v-text-field__details{
  display: none;
}
.v-text-field>.v-input__control>.v-input__slot>.v-text-field__slot  input{
    text-align: center;
    margin-left: -2px;
}
.control-increse{
transform: scale(.8);
}
.move{
    position: relative;
    font-size:11px;
    color: #6a6a6a;
    left: 12px;
}
.move1{
   color:#0074d9 ;
    font-size: 12px;
}
.delete {
    font-size: 10px;
    position: relative;
    margin: 8px 0;
    padding: 0;
    letter-spacing: .2em;
    text-transform: uppercase;
    color: #6a6a6a;
    border: 0;
    background: none;
    width: 50px !important;
}
.delete:before {
    position: absolute;
    bottom: -1px;
    left: 0;
    width: 100%;
    height: 1px;
    content: "";
    transition: transform .2s ease-in-out;
    transform: scale(1);
    transform-origin: left center;
    background: currentColor;

}
.delete:hover:before{
     transform: scaleX(0);
}
.modal-footer{
transform: translateY(-95px);
 background: #f2efeb;
}
.checkout{
font-size: 12px!important;
    /* display: flex; */
    padding: 12px 100px;
    color: #fff;
    border: 1px solid transparent;
    border-radius: 5px;
    background: #000;
    align-items: center;
    justify-content: center;
    position: relative;
    top: 23px;

}
.checkout:hover{
    background: white;
    color: black;
    border: 2px solid black;
}
svg{
    stroke-width: 1.5px;
    stroke: #000;
    width: 15px;
    height: 15px;
}
.close{
    color: black!important;
}
.cart-empty{
    position: absolute;
    font-size: 15px;
    top: 50%;
    left: 50%;
    width: auto;
    transform: translate(-50%,-50%);
    animation: i .8s cubic-bezier(.215,.61,.355,1);


}
.modal-title,.cart-empty{
    text-align: center;
    letter-spacing: .2em;
    font-weight: 300;
    text-transform: uppercase;

}
@keyframes i{0%{transform:translate(-50%,calc(-50% + 35px));opacity:0}to{transform:translate(-50%,-50%);opacity:1}}

.lang:hover{
    border-bottom: 2px solid rgb(27, 26, 26);
}
.sm{
    display: none;
}
@media(max-width: 991px)
{
    .lg{
        display: none;
    }
    .sm{
        display: block;
    }
}


@media (max-width: 991px){
    .navbar-brand{
        position: absolute;
        left: 47%;
        top: 2px
    }
    .nav_sm_btn{
        position: absolute;
        right: 1%;
        top: -4px;
    }
}
 @media (max-width:299px){
    .modal-content {
        width: 240px;
        left: 2%;
    }

}
 @media (min-width:300px ) and (max-width:316px){
    .modal-content {
        width: 280px;
        min-height: 511px;
    }
    .modal-body{
        min-height: 571px;
    }

}
 @media (min-width:317px ) and (max-width:336px){
    .modal-content {
        width: 300px;
        min-height: 511px;
    }
    .modal-body{
        min-height: 571px;
    }

}
 @media (min-width:337px ) and (max-width:365px){
    .modal-content {
        width: 320px;
        min-height: 511px;
    }
    .modal-body{
        min-height: 571px;
    }

}
 @media (min-width:366px ) and (max-width:396px){
    .modal-content {
        width: 350px;
        min-height: 511px;
    }
    .modal-body{
        min-height: 571px;
    }

}
 @media (min-width:397px ) and (max-width:440px){
    .modal-content {
        width: 383px;
        min-height: 511px;
    }
    .modal-body{
        min-height: 571px;
    }

}
 @media (min-width:441px ) and (max-width:457px){
    .modal-content {
        width: 425px;
        min-height: 511px;
    }
    .modal-body{
        min-height: 571px;
    }

}
@media (min-width:458px) and (max-width: 767px)
{
    .modal-content{
        min-height: 624px;
    }
}
.lang_sm{
    display: none;
}
.nav_sm_btn{
    display: none;
}
@media(max-width:991px)
{
    .lang_sm{
        display: block;
    }
    .lang_lg{
        display: none;
    }
    .nav_lg_btn{
        display: none;
    }
    .nav_sm_btn{
        display: block;
    }
}
</style>
