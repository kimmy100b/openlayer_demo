<template>
  <div id="app">
    <main-page></main-page>
  </div>
</template>

<script>
import MainPage from "@/components/main/Main.vue";

export default {
  name: "App",
  data() {
    return {};
  },
  mounted() {

  },
  components: {
    "main-page": MainPage,
  },
};
</script>

<style lang='scss'>
  @import '~@/assets/scss/app.scss';
</style>
