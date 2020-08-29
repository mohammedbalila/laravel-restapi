<template>
  <header :style="`background-image:url(${data})`" class="about-us">
    <div class="overlay"></div>

    <template v-if="$i18n.locale=='ar'">
      <div
        class="text mb-4 about-content"
        style="text-align: right !important;left: 0% !important; padding-right:5%"
      >
        <h1>{{ $t("message.about") }}</h1>
        <router-link to="/about" class="mb-5">
          <a class="mb-5" style="color:white;">{{ $t("message.readmore") }}</a>
        </router-link>
      </div>
    </template>

    <template v-else>
      <div class="text mb-4 about-content">
        <h1>{{ $t("message.about") }}</h1>
        <router-link to="/about" class="mb-5">
          <a class="mb-5" style="color:white">{{ $t("message.readmore") }}</a>
        </router-link>
      </div>
    </template>
  </header>
</template>

<script>
export default {
  data() {
    return {
      data: ""
    };
  },
  created() {
    axios
      .get("/api/homedata")
      .then(result => {
        if (result.data.status) {
          this.data = result.data.data.video;
        }
      })
      .catch(err => {
        console.log(err.data);
      });
  }
};
</script>

<style scoped>
.about-us .about-content {
  position: relative;
  top: 322px;
  /* font-family: neuzeit-grotesk, sans-serif !important; */
}

@media (max-width: 400px) {
  .about-us .about-content {
    position: relative;
    top: 431px;
  }
}
.about-us {
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
.about-us .about-content h1 {
  font-weight: 700;
  font-family: neuzeit-grotesk-bold, sans-serif !important;
  font-size: 55px;
}
.about-us .about-content a {
  font-weight: 300;
  font-family: neuzeit-grotesk-light, sans-serif !important;
}
</style>



