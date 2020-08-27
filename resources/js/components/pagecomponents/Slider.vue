<template>

  <div class="mt-5">
    <div class="container-fluid">
        <h2 class="home-products-slider__title section-title">
            <span>{{ $t("message.newrelease") }}</span>
            <span class="sTitle">{{ $t("message.newreleaseheader") }}</span>
        </h2>
        <div class="swiper-container mt-5" >
            <div class="swiper-wrapper">
              <div class="swiper-slide " v-for="data in sliderPalettes" :key="data.id">
                <div class="product-grid-item">
                    <div class="product-grid-item__image">
                        <router-link  :to="{ path: '/shop', query: { mydata: data.id }}" class="product-grid-item__imagewrapper"  data-product-handle="son-this-is-the-universe" data-product-quantity="48">
                            <img class="front" :src="data.img?data.img:'ffff'" style="height:100%">
                            <img class="back" :src="data.extraimg?data.extraimg.img:'https://previews.123rf.com/images/eyematrix/eyematrix1712/eyematrix171200014/91720468-used-artists-paint-brushes-different-colors-on-palette-background.jpg'" style="height:100%">
                        </router-link>
                        <div class="product-grid-item__variants">
                            <span>Size</span>
                            <div class="product-grid-item__variants--content">
                                <a href="#" data-cart-add="32583351238759" class="soldout">L</a>
                                <a href="#" data-cart-add="32583351337063" class="soldout">M</a>
                                <a href="#" data-cart-add="32583351402599" class="">S</a>
                            </div>
                        </div>
                        <!-- <div class="product-grid-item__tags">
                            <div class="cms-special-description">
                                <span class="cms-special-label color-7">{{ $t("message.newreleaseheader") }}</span>
                                <p>This artwork was added recently (but will likely be sold out soon)</p>
                            </div>
                        </div> -->
                    </div>
                    <div class="product-grid-item__info">
                        <div class="product-grid-item__title">
                            <h3 class="product-grid-item__name"><a  data-product-handle="son-this-is-the-universe" data-product-quantity="48">{{data.name}}</a></h3>
                            <span class="product-grid-item__price">from ${{data.L_price}}</span>
                        </div>
                        <span class="product-grid-item__qty"><span class="prints-times text-success">{{data.palette_copies}} / </span><span>{{data.avalible_copies}}&nbsp;{{$t("message.left") }}</span></span>
                    </div>
                </div>
              </div>
            </div>
            <!-- Add Pagination -->
            <div class="swiper-pagination"></div>
          </div>
    </div>
</div>
</template>

<script>
    export default {
        data(){
            return{
                sliderPalettes:[],
                image_hover:'',
            }
        },
    created() {
        axios
            .get("/api/palettes")
            .then(response => {
                this.artists = response.data.artists;
                this.sliderPalettes = response.data.palettesSlider;
            })
            .catch(error => console.log(error.response.data));
    },
        mounted(){
            var swiper = new Swiper('.swiper-container', {
                slidesPerView: 4,
                spaceBetween: 30,
                freeMode: true,
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },
                breakpoints: {
                // when window width is >= 320px
                     280: {
                    slidesPerView: 1,
                    spaceBetween: 20
                    },
                320: {
                    slidesPerView: 1,
                    spaceBetween: 20
                    },
                    640:{
                        slidesPerView:2
                    },
                    // when window width is >= 640px
                991: {
                    slidesPerView: 3,
                    spaceBetween: 30
                    }
                },
                observer:true,
                observerParents:true,

            });
            swiper.update();
        },
    }
</script>

<style scoped>
.swiper-container{
    margin-bottom: 50px;
}
.swiper-pagination{
    position: relative;
    top: 2px;
}
@media(max-width: 767px){
    .product-grid-item__title{
        font-size: 16px;
    }
    /* .product-grid-item .product-grid-item__image .product-grid-item__imagewrapper{
        min-height: 200px;
    } */
}
.swiper-pagination[data-v-40f21cb0] {

    margin-bottom: 11px;
}


</style>
