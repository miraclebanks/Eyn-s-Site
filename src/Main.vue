<script>
  import MainHeader from "./components/mainHeader.vue";
  import MainCta from "./components/mainCta.vue";
  import Navigation from "./components/navigation.vue";

  export default {
    name: "About",
    components: {
      MainHeader,
      MainCta,
      Navigation,
    },
  };
</script>

<template>
  <Navigation />
  <MainHeader />
  <MainCta />
</template>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
</style>
