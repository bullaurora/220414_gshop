<template>
  <div id="app">
    <router-view />
    <FooterGuide v-show="$route.meta.showFooter" />
  </div>
</template>

<script>
import {mapActions} from 'vuex'
import FooterGuide from "./components/FooterGuide/FooterGuide.vue";

export default {
  mounted() {
    this.getAddress()
    this.getUserInfo()
  },
  methods:{
    ...mapActions(['getAddress','getUserInfo'])
  },
  components: {
    FooterGuide,
  },
};
</script>

<style lang="stylus" rel="stylesheet/stylus">
* {
  touch-action: none;
}
.app {
  width: 100%;
  height: 100%;
  background: #f5f5f5;
}
</style>