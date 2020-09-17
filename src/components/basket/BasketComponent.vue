<template>
  <div class="basket" @click.stop>
    <div class="basket-header">
      <div class="basket-title">
        {{ 'basketLeftSide' | localize }}{{ totalItemsInBasket
        }}{{ 'basketRightSide' | localize }}
      </div>
      <img class="basket-close-btn" :src="crossIcon" alt="#" @click.stop="switchBasket" />
    </div>

    <BasketItemComponent
      v-for="(product, index) in productsInBasket"
      :key="index"
      :id="index"
      :product="product"
      :lastId="basketLastItemId"
    />

    <div class="basket-footer">
      <button class="basket-btn">{{ 'continueButton' | localize }}</button>
      <button
        @click="removeAllProductsFromBasket"
        class="basket-btn"
      >{{ 'removeAllButton' | localize }}</button>
      <span class="basket-summ">&sum;</span>
      <span class="basket-price">$ {{ totalItemsPrice }}</span>
    </div>

    <div class="left-bottom-dot"></div>
    <div class="right-bottom-dot"></div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

import BasketItemComponent from "./BasketItemComponent";

import crossImg from "../../assets/icons/cross.svg";

export default {
  name: "BasketComponent",
  components: {
    BasketItemComponent,
  },
  data: function () {
    return {
      crossIcon: crossImg,
    };
  },
  methods: {
    ...mapActions(["removeAllProductsFromBasket"]),
  },
  computed: {
    ...mapGetters(["productsInBasket"]),
    basketLastItemId: function () {
      if (this.productsInBasket.length === 0) {
        return 0;
      } else {
        const id = this.productsInBasket.length - 1;
        return id;
      }
    },
    totalItemsInBasket: function () {
      let totalItemsInBasket;
      this.productsInBasket !== null
        ? (totalItemsInBasket = this.productsInBasket.reduce(
            (total, good) => total + good.count,
            0
          ))
        : (totalItemsInBasket = 0);
      return totalItemsInBasket;
    },
    totalItemsPrice: function () {
      let totalItemPrice;
      this.productsInBasket !== null
        ? (totalItemPrice = this.productsInBasket.reduce(
            (total, good) => total + good.count * good.price,
            0
          ))
        : (totalItemPrice = 0);
      return totalItemPrice;
    },
  },
  props: {
    switchBasket: Function,
  },
};
</script>

<style lang="scss" scoped>
$backgroundMain: #0b0c23;
$fontMain: #ffffff;
$fontSecondary: #c4c4c4;
$filterBackgroundUnactive: #232439;
$filterBackgroundActive: #17182e;
$filterFontUnactive: #c4c4c4;
$filterBorder: #2e2f42;

$basketBackground: #17172e;
$basketBorder: #39394c;
$basketBtnBackground: #0e0f25;

.basket {
  z-index: 2;
  position: absolute;
  background: $basketBackground;
  top: 24px;
  right: -100px;
  width: 400px;
}

.basket-header {
  height: 58px;
  width: 100%;
  border-top: 1px solid $fontSecondary;
  border-bottom: 1px solid $basketBorder;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.basket-title {
  font-family: "Open sans light";
  font-size: 16px;
  color: $fontMain;
  margin-left: 14px;
}

.basket-close-btn {
  opacity: 0.7;
  padding: 10px;
  margin-right: 14px;
  cursor: pointer;
  &:hover {
    opacity: 1;
  }
}

.basket-footer {
  height: 59px;
  width: 100%;
  border-top: 1px solid $basketBorder;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
}

.basket-btn {
  margin-top: 14px;
  margin-left: 14px;
  width: 86px;
  height: 32px;
  border: none;
  outline: none;
  font-family: "Open sans light";
  font-size: 12px;
  background: $basketBtnBackground;
  background-image: url("../../assets/images/backgrounds/button-background.png");
  cursor: pointer;
}

.basket-summ,
.basket-price {
  margin-top: 20px;
  height: 20px;
  font-family: "Open sans light";
  font-size: 14px;
}

.basket-summ {
  padding-right: 20px;
  text-align: right;
}

.left-bottom-dot {
  height: 2px;
  width: 2px;
  background: $fontSecondary;
  position: absolute;
  left: 0px;
  bottom: 0px;
}

.right-bottom-dot {
  height: 2px;
  width: 2px;
  background: $fontSecondary;
  position: absolute;
  right: 0px;
  bottom: 0px;
}

@media all and (max-width: 1640px) {
  .basket {
    right: -50px;
  }
}

@media all and (max-width: 1440px) {
  .basket {
    right: 0px;
  }
}
</style>
