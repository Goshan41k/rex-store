<template>
  <div class="menu-mobile">
    <!-- <div
      class="menu-mobile-btn"
      v-for="(item, index) in menuButtons"
      :key="index"
      :class="{ 'menu-mobile-btn-focused': focusedMenuButtonId === index }"
      @mouseover="slideTo(index)"
      @click="slideTo(index)"
    >{{ item.title | localize }}</div>-->
    <router-link
      exact
      class="menu-mobile-btn"
      v-for="(item, index) in menuButtons"
      :key="index"
      :to="item.path"
      active-class="menu-mobile-btn-active"
      :class="{ 'menu-mobile-btn-focused': focusedMenuButtonId === index }"
      @mouseover.native="slideTo(index)"
      @mouseleave.native="slideTo(5)"
    >{{ item.title | localize }}</router-link>
  </div>
</template>

<script>
export default {
  name: "MenuComponentMobile",
  data: function () {
    return {
      focusedMenuButtonId: 0,
      menuButtons: [
        { title: "menuHomePage", path: "/" },
        { title: "menuAboutPage", path: "/about" },
        { title: "menuSupportPage", path: "/support" },
      ],
    };
  },
  methods: {
    slideTo: function (index) {
      this.focusedMenuButtonId = index;
    },
  },
};
</script>

<style lang="scss" scoped>
$backgroundMain: #0b0c23;
$fontMain: #ffffff;
$fontSecondary: #c4c4c4;
.menu-mobile {
  display: flex;
  &-btn {
    font-size: 26px;
    color: $fontSecondary;
    margin-left: 5px;
    margin-right: 5px;
    text-decoration: none;
    transition: 0.3s;
    &-focused {
      font-size: 30px;
    }
    &-active {
      color: $fontMain;
    }
  }
}
</style>
