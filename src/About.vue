<script>
  import Navigation from "./components/navigation.vue";
  import AboutBlurb from "./components/about/about-blurb.vue";
  import AboutCompany from "./components/about/about-company.vue";

  export default {
    name: "App",
    components: {
      Navigation,
      AboutBlurb,
      AboutCompany,
    },
  };
</script>

<template>
  <Navigation />
  <AboutBlurb />
  <AboutCompany />
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
