<script>
  import Navigation from "./components/navigation.vue";

  export default {
    name: "App",
    components: {
      Navigation,
    },
  };
</script>

<template>
  <Navigation />
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
