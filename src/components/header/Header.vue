<template>
  <div class="header">
    <transition name="menu-switch">
      <MenuComponent v-if="isMenuVisible" :switchMenu="switchMenu" />
    </transition>
    <transition name="menu-switch">
      <AccountMenu v-if="isAccMenuVisible" :switchMenu="switchAccMenu" />
    </transition>

    <div class="header-left">
      <img :src="logotypeIcon" alt="#" />
      <img class="header-left-lang-icon" :src="planetIcon" alt="-" />
      <div class="header-left-current-lang" @click="switchLangMenu">
        {{ 'currentLang' | localize }}
        <div v-if="isLangMenuVisible" class="header-left-lang-menu">
          <div class="header-left-lang-menu-select" @click="setEng">ENG</div>
          <div class="header-left-lang-menu-select" @click="setRus">RUS</div>
        </div>
      </div>
    </div>

    <div class="header-middle">
      <img
        class="header-middle-btn"
        @click="switchMenu"
        :src="menuIcon"
        alt="#"
        v-if="screenWidth >= 1025"
      />

      <MenuComponentMobile v-if="screenWidth <= 1024" />
    </div>

    <div class="header-right">
      <img class="header-icon" :src="userIcon" alt="#" />
      <div class="header-nav-btn" @click="switchAccMenu">
        <div v-if="this.user">{{this.user.email}}</div>
        <div v-else>{{'authorization' | localize}}</div>
      </div>
      <img class="header-icon" :src="deviderIcon" alt="#" />
      <img class="header-icon" :src="walletIcon" alt="#" />
      <img class="header-icon" :src="deviderIcon" alt="#" />
      <img class="header-icon" :src="bellIcon" alt="#" />
      <img class="header-icon" :src="deviderIcon" alt="#" />
      <div class="header-icon header-basket" @click.stop="switchBasket">
        <BasketComponent v-if="isBasketVisible" :switchBasket="switchBasket" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapGetters } from "vuex";

import firebaseAPI from "../../firebase";

import MenuComponent from "../menu/MenuComponent";
import MenuComponentMobile from "../menu/MenuComponentMobile";
import AccountMenu from "../accountMenu/AccountMenu";
import BasketComponent from "../basket/BasketComponent";

import logotype from "../../assets/icons/Logotype.svg";
import planet from "../../assets/icons/Planet.svg";
import menu from "../../assets/icons/Menu.svg";
import user from "../../assets/icons/User.svg";
import wallet from "../../assets/icons/Wallet.svg";
import bell from "../../assets/icons/Bell.svg";
import cart from "../../assets/icons/Cart.svg";
import devider from "../../assets/icons/Devider.svg";

import goodsImg1 from "../../assets/images/goods/goods_1.png";
import goodsImg2 from "../../assets/images/goods/goods_2.png";
import goodsImg3 from "../../assets/images/goods/goods_3.png";
import goodsImg4 from "../../assets/images/goods/goods_4.png";
import goodsImg5 from "../../assets/images/goods/goods_5.png";

export default {
  name: "Header",
  components: {
    MenuComponent,
    BasketComponent,
    MenuComponentMobile,
    AccountMenu,
  },
  data: function () {
    return {
      logotypeIcon: logotype,
      planetIcon: planet,
      menuIcon: menu,
      userIcon: user,
      walletIcon: wallet,
      bellIcon: bell,
      cartIcon: cart,
      deviderIcon: devider,
      isMenuVisible: false,
      isLangMenuVisible: false,
      isAccMenuVisible: false,
      isBasketVisible: false,
      screenWidth: window.innerWidth,
    };
  },
  computed: {
    ...mapGetters(["user"]),
  },
  methods: {
    ...mapMutations(["setEng", "setRus"]),
    switchMenu: function () {
      this.isMenuVisible = !this.isMenuVisible;
    },
    switchLangMenu: function () {
      this.isLangMenuVisible = !this.isLangMenuVisible;
    },
    switchAccMenu: function () {
      this.isAccMenuVisible = !this.isAccMenuVisible;
    },
    switchBasket: function () {
      this.isBasketVisible = !this.isBasketVisible;
    },
    updateScreenWidth() {
      this.screenWidth = window.innerWidth;
    },
  },
  created() {
    window.addEventListener("resize", this.updateScreenWidth);
  },
};
</script>

<style lang="scss" scoped>
$backgroundMain: #0b0c23;
$fontMain: #ffffff;
$fontSecondary: #c4c4c4;

.header {
  margin-top: 30px;
  display: grid;
  grid-template-areas: "left middle right";
  grid-template-columns: 1fr 1fr 1fr;
  &-left {
    grid-area: left;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    justify-content: center;
  }
  &-middle {
    grid-area: middle;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  &-right {
    grid-area: right;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    font-size: 14px;
  }
  &-icon {
    margin-left: 10px;
    margin-right: 10px;
  }
  &-nav-btn {
    font-size: 14px;
    cursor: pointer;
  }
}

.header-left-lang-icon {
  padding-left: 25px;
  padding-right: 10px;
}

.header-left-current-lang {
  cursor: pointer;
  position: relative;
  font-size: 14px;
}

.header-left-lang-menu {
  z-index: 1;
  position: absolute;
  left: 0;
  top: 19;
  width: 200px;
  background: rgba(black, 0.4);
  &-select {
    padding-top: 5px;
    padding-bottom: 5px;
    color: $fontSecondary;
    font-size: 18px;
    text-align: center;
    transition: 0.3s;
    &:hover {
      color: $fontMain;
    }
  }
}

.header-basket {
  position: relative;
  background-image: url("../../assets/icons/Cart.svg");
  height: 20px;
  width: 22px;
  cursor: pointer;
  margin-left: 10px;
  margin-right: 25px;
}

.header-middle-btn {
  cursor: pointer;
}

.menu-switch-enter-active,
.menu-switch-leave-active {
  transition: opacity 0.5s;
}
.menu-switch-enter,
.menu-switch-leave-to {
  transition: 0s;
  opacity: 0;
}

@media all and(max-width: 1024px) {
  .header {
    grid-template-columns: 0.5fr 1fr;
    grid-template-rows: 32px 96px;
    grid-template-areas:
      "left right"
      "middle middle";
  }
}

@media all and(max-width: 768px) {
  .header {
    grid-template-columns: 1fr 2fr;
    grid-template-rows: 32px 96px;
    grid-template-areas:
      "left right"
      "middle middle";
  }
}
</style>
