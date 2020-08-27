<template>
    <section class="container">
        <header class="mb-4 mt-5 mb-5">
            <div class="overlay"></div>
            <video playsinline="playsinline" autoplay="autoplay" muted="muted" loop="loop">
            <source src="https://cdn.shopify.com/s/files/1/3000/4362/files/24-1.mp4?v=1592991630" type="video/mp4">
            </video>
        </header>
        <div class="product-detail-text ">
            <h3 class="title">Limited Editions</h3>
            <p class="text">Each artwork is enhanced by hand, making each piece from the edition unique.</p>
        </div>
        <header class="mb-4 mt-5 mb-5">
            <div class="overlay"></div>
            <video playsinline="playsinline" autoplay="autoplay" muted="muted" loop="loop">
            <source src="https://cdn.shopify.com/s/files/1/3000/4362/files/11-2.mp4?v=1592991629" type="video/mp4">
            </video>
        </header>
    </section>
</template>

<script>
export default {

}
</script>

<style scoped>
    .product-detail-text{
        margin: auto;
        text-align: center;
    }
    .product-detail-text .title{
        font-size: 40px;
        margin: 0 0 20px;
        font-weight: bold;
    }
    .product-detail-text .text{
        font-size: 22px;
        margin: 0;
    }
    video{
        display: block !important;
    }
</style>
