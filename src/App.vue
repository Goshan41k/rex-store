<template>
  <div class="app">
    <Header />
    <router-view></router-view>
  </div>
</template>

<script>
import { mapActions } from "vuex";

import Header from "./components/header/Header";

import firebaseAPI from "./firebase";

export default {
  name: "App",
  components: { Header },
  data: function () {
    return {
      screenWidth: window.innerWidth,
    };
  },
  methods: {
    ...mapActions(["fetchCurrentUser", "fetchProductsFromBasket"]),
    updateScreenWidth() {
      this.screenWidth = window.innerWidth;
    },
  },
  created() {
    window.addEventListener("resize", this.updateScreenWidth);
    this.fetchCurrentUser();
  },
  mounted() {
    this.fetchProductsFromBasket();
  },
};
</script>

<style lang="scss">
@font-face {
  font-family: "Exo";
  src: url("./assets/fonts/exo-medium.ttf");
}
@font-face {
  font-family: "Exo regular";
  src: url("./assets/fonts/exo-regular.ttf");
}
@font-face {
  font-family: "Open sans light";
  src: url("./assets/fonts/open-sans-light.ttf");
}

@font-face {
  font-family: "Open sans regular";
  src: url("./assets/fonts/open-sans-regular.ttf");
}

@font-face {
  font-family: "Open sans bold";
  src: url("./assets/fonts/open-sans-bold.ttf");
}

$backgroundMain: #0b0c23;
$fontMain: #ffffff;
$fontSecondary: #c4c4c4;

* {
  font-size: 20px;
  color: $fontMain;
  font-family: "Exo";
}

body {
  padding: 0;
  margin: 0;
  background: $backgroundMain;
  display: flex;
  justify-content: center;
  align-items: flex-start;
}

.app {
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-rows: 62px 1fr;
}

@media all and (min-width: 1440px) {
  .app {
    width: 1440px;
  }
}

@media all and (max-width: 1024px) {
  .app {
    grid-template-rows: 128px 1fr;
  }
}
</style>
