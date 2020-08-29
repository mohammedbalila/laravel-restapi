<template>
  <div class="text-center">
    <span @click="setLocale" v-if="$i18n.locale == 'en'">العربية</span>
    <span @click="setLocale" class="en" v-else>English</span>
  </div>
</template>
    <script>
export default {
  methods: {
    setLocale() {
      if (this.$i18n.locale == "en") {
        this.$i18n.locale = "ar";
        if (this.$route.name == "about") this.$vuetify.rtl = true;
        else this.$vuetify.rtl = false;
      } else {
        this.$i18n.locale = "en";
        this.$vuetify.rtl = false;
      }
    }
  },
  watch: {
    $route(newRoute, oldRoute) {
      if (this.$i18n.locale == "ar") {
        if (newRoute.name != "shop") this.$vuetify.rtl = true;
        else this.$vuetify.rtl = false;
      }
    }
  }
};
</script>
 <style scoped>
span {
  cursor: pointer;
}
</style>

