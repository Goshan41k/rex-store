<template>
  <div class="home">
    <Main />
    <Blog />
    <Footer />
  </div>
</template>

<script>
import Main from "../components/Main";
import Blog from "../components/Blog";
import Footer from "../components/Footer";

export default {
  name: "Home",
  components: {
    Main,
    Blog,
    Footer,
  },
};
</script>

<style lang="scss" scoped>
.home {
  min-height: 750px;
  height: 100%;
  overflow: hidden;
  display: grid;
  grid-template-rows: 1fr 70px 93px;
}
</style>