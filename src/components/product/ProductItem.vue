<template>
  <div class="product-item" @mouseover="productHover" @mouseleave="productLeave">
    <div class="product-item-hovered" v-if="isShowingArrowVisible" @click="showQuickBuy">
      <img class="product-item-preview-arrow" :src="arrowIcon" alt="#" />
    </div>

    <div v-if="isQuickBuyVisible" class="product-item-preview">
      <div class="product-item-title">{{ item.title }}</div>
      <div class="product-item-information">
        <span class="product-item-information-price">${{ item.price }}</span>
        <span class="product-item-information-discount">
          {{
          item.priceDiscount
          }}
        </span>
        <span class="product-item-information-type">{{ item.psu }}</span>
      </div>
      <div class="product-item-buttons-block">
        <router-link
          :to="'/product/' + item.id"
          tag="button"
          class="product-button product-button-details"
        >{{ 'detailsButton' | localize }}</router-link>
        <button
          class="product-button product-button-add"
          @click="moveProductToBasket(item.id)"
        >{{ 'addToCartButton' | localize }}</button>
      </div>
    </div>

    <div class="product-item-title">{{ item.title }}</div>

    <div class="product-item-image">
      <img :src="item.img" alt="#" />
    </div>

    <div class="product-item-information">
      <span class="product-item-information-price">${{ item.price }}</span>
      <span class="product-item-information-discount">{{ item.priceDiscount }}</span>
      <span class="product-item-information-type">{{ item.psu }}</span>
    </div>

    <div class="dot dot-left-top"></div>
    <div class="dot dot-right-top"></div>
    <div class="dot dot-left-bottom"></div>
    <div class="dot dot-right-bottom"></div>
  </div>
</template>

<script>
import { mapMutations, mapActions } from "vuex";

import openArrow from "../../assets/images/open-arrow.png";

export default {
  name: "ProductItem",
  props: {
    item: Object,
  },
  data: function () {
    return {
      arrowIcon: openArrow,
      isShowingArrowVisible: false,
      isQuickBuyVisible: false,
      selectedHashRate: "hash rate 8.0",
    };
  },
  methods: {
    ...mapActions(["moveProductToBasket"]),
    productHover: function () {
      this.isShowingArrowVisible = true;
    },
    productLeave: function (e) {
      if (e.relatedTarget == null) return;
      this.isShowingArrowVisible = false;
      this.isQuickBuyVisible = false;
    },
    showQuickBuy: function () {
      this.isQuickBuyVisible = true;
    },
  },
};
</script>

<style lang="scss" scoped>
$backgroundMain: #0b0c23;
$fontMain: #ffffff;
$fontSecondary: #c4c4c4;
$backgroundProduct: #232439;
$psuColor: #00a651;
$backgroundDetails: #1b1b67;
$backgroundAdd: #0b0c23;

.product-item {
  width: 216px;
  height: 216px;
  background: $backgroundProduct;
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: 40px 1fr 48px;
  position: relative;
  font-family: "Open sans light";

  &-hovered {
    font-family: inherit;
    position: absolute;
    top: 0px;
    right: 0px;
    width: 200px;
    height: 100%;
    line-height: 216px;
    text-align: right;
    margin-right: 16px;
    cursor: pointer;
    &-arrow {
      width: 10px;
    }
  }

  &-title {
    font-family: inherit;
    margin-top: 16px;
    margin-left: 16px;
    margin-right: 16px;
    font-size: 12px;
    color: $fontSecondary;
    text-align: left;
  }

  &-image {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &-information {
    font-family: inherit;
    display: flex;
    justify-content: space-between;
    padding-left: 17px;
    padding-right: 17px;

    &-price {
      font-family: inherit;
      font-size: 16px;
      color: $fontMain;
      line-height: 48px;
    }
    &-discount {
      font-family: inherit;
      font-size: 14px;
      color: $fontSecondary;
      text-decoration: line-through;
      line-height: 48px;
    }
    &-type {
      font-family: inherit;
      font-size: 10px;
      color: $psuColor;
      line-height: 48px;
    }
  }
}

.product-item-preview {
  font-family: "Open sans light";
  position: absolute;
  width: 100%;
  height: 100%;
  background: rgba(black, 0.5);
  display: flex;
  flex-direction: column;
  &-arrow {
    width: 16px;
  }
}

.product-item-buttons-block {
  width: 188px;
  display: flex;
  justify-content: space-between;
  align-self: center;
}

.product-button {
  width: 86px;
  height: 32px;
  border: none;
  outline: none;
  font-family: "Open sans light";
  font-size: 12px;
  align-self: flex-start;
  cursor: pointer;
  &-add {
    background: $backgroundAdd;
    background-image: url("../../assets/images/backgrounds/button-background.png");
  }
  &-details {
    background: $backgroundDetails;
  }
}

.dot {
  height: 2px;
  width: 2px;
  background: $fontSecondary;
  position: absolute;
  &-left-top {
    left: 0px;
    top: 0px;
  }
  &-right-top {
    right: 0px;
    top: 0px;
  }
  &-left-bottom {
    left: 0px;
    bottom: 0px;
  }
  &-right-bottom {
    right: 0px;
    bottom: 0px;
  }
}
</style>
