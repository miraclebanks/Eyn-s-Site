<script>
  export default {
    name: "MainNavigation",
  };
</script>

<template>
  <div class="nav-container">
    <div class="links">
      <a> Home</a>
    </div>
    <div class="links">
      <a> About Us</a>
    </div>
    <div class="links">
      <a> Contact Us</a>
    </div>
  </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .nav-container {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    height: 52px;
    padding-top: 50px;
    margin: 24px 0px;
  }
  .links {
    margin: 0 16px;
    &:hover {
      text-decoration: underline;
      cursor: pointer;
    }
  }
</style>
