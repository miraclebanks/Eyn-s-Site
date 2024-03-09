<script>
  import Navigation from "./components/navigation.vue";
  import DeathAspects from "./components/legal/death-aspects.vue";

  export default {
    name: "App",
    components: {
      Navigation,
      DeathAspects,
    },
  };
</script>

<template>
  <Navigation />
  <DeathAspects />
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
