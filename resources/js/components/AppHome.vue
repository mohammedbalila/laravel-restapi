<template>
  <v-app>
      <appnavbar></appnavbar>
      <router-view></router-view>
      <appfooter></appfooter>
  </v-app>
</template>

<script>
import appnavbar from './Layout/Navbar';

import appfooter from './Layout/Footer';
import 'jquery'
export default {
    created(){},

    components:{appfooter,appnavbar}

}
</script>

<style>

</style>
