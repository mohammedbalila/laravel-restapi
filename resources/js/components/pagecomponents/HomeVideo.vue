<template>
    <header :style="`background-image:url(${data})`" class="about-us">
        <div class="overlay"></div>

        <div class="text mb-4 about-content">
            <h1>{{ $t("message.about") }}</h1>
            <router-link to="/about" class="mb-5">
                <a class="mb-5" style="color:white">{{ $t("message.readmore") }}</a>
            </router-link>
        </div>
    </header>
</template>

<script>
export default {
    data(){
        return{
            data:'',
        }
    },
    created(){
        axios.get('/api/homedata').then((result) => {
            if(result.data.status)
            {
                this.data=result.data.data.video
            }
        }).catch((err) => {
            console.log(err.data);

        });
    }

}
</script>

<style scoped>
.about-us .about-content{
    position: relative;
    top:322px;   
}

@media(max-width: 400px){
    .about-us .about-content{
        position: relative;
        top:431px;
     }
}
.about-us{
    background-repeat: no-repeat;
    background-size: cover  ;
    background-position: center;
}

</style>



