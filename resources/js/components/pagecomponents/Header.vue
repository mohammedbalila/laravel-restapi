<template>
   <div class="hero hero-classic">
    <div class="row">
        <img class="hero-image-md" :src="data.image"  alt="Fine art">

        <div class="col-md-12"    >
            <img style="width:100%;height:500px" class="hero-image-pc" :src="data.image" alt="Fine art">
            <div class="hero-content">
                <p  v-if="$i18n.locale == 'en'" class="hero-subtitle">{{ data.word1_en }}</p>
                <p v-else class="hero-subtitle">{{ data.word1_ar }}</p>
                <h3 v-if="$i18n.locale == 'en'" class="hero-title">{{ data.word2_en }}</h3>
                <h3 v-else class="hero-title">{{ data.word2_ar }}</h3>
                <div class="hero-counter">
                    <span class="hero-counter__live">{{ $t("message.live") }}</span>
                    <img class="hero-counter__eye ml-2 mr-1" src="//cdn.shopify.com/s/files/1/3000/4362/t/109/assets/eye.png?v=10839783198912625093">
                    <span id="hero-counter">{{numbers}}</span>
                    {{ $t("message.shoppers") }}
                </div>
                <router-link to="/shop">
                    <a class="hero-btn btn">{{ $t("message.shopnow") }}</a>
                </router-link>

            </div>
        </div>
    </div>
 </div>
</template>

<script>
export default {
    data(){
        return{
            images: [
                '//cdn.shopify.com/s/files/1/3000/4362/files/desktop-hero-1_2048x.jpg?v=1592197390',
                '//cdn.shopify.com/s/files/1/3000/4362/files/Augmented_Art_Hero_Desktop_2048x.png?v=1594004875',
                '//cdn.shopify.com/s/files/1/3000/4362/files/peach_desktop_final_post_2048x.jpg?v=1581001094',
                '//cdn.shopify.com/s/files/1/3000/4362/files/sepia_dekstop_final_post_2048x.jpg?v=1565183372'
            ],
            selectedImage: null,
            numbers:"",
            data:{},
        }
    },
    methods: {
        randomItem (items) {
        return items[Math.floor(Math.random()*items.length)];
        }
    },
    created() {

        this.selectedImage = this.randomItem(this.images);
        this.numbers=Math.floor(Math.random()*200)+50;
        axios.get('/api/homedata').then((result) => {

            if(result.data.status)
            {

                this.data=result.data.data
            }
        }).catch((err) => {
            console.log(err.data);

        });
    }
}
</script>

<style scoped>
.row{
    padding: 0;
    margin: 0;
}
@media(max-width:991px)
{
    .hero .hero-title{
        font-size: 60px;
        padding: 0 10px ;
    }
}

@media(max-width:550px)
{
    .hero .hero-title{
        font-size: 40px;
        padding: 0 10px ;
        margin:20px 0 10px 0;
    }
}
a:not([href]):hover{
    color: white !important;
}
</style>
