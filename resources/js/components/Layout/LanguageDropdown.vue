<template>
  <div class="text-center">
    <span @click="setLocale" v-if="$i18n.locale == 'en'">العربية</span>
    <span @click="setLocale" v-else>English</span>
  </div>
</template>
    <script>
    export default{
      methods: {
        setLocale() {
          if(this.$i18n.locale == 'en')
          {
            this.$i18n.locale = 'ar';
          } else{
            this.$i18n.locale = 'en';
          }
              
        }
      }
    }
 </script>
 <style scoped>
  span{
    cursor: pointer;
  }
 </style>

