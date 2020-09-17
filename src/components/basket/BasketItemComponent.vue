<template>
  <div :class="lastId === id ? 'basket-item basket-item-last' : 'basket-item'">
    <img
      @mouseover="switchRemoveBtn"
      @mouseleave="switchRemoveBtn"
      @click="removeProductFromBasket(product.id)"
      :src="isRemoveBtnVisible ? basketTrashIcon : product.img"
      alt="#"
      class="basket-item-image"
    />

    <div class="basket-item-name">{{ product.title }}</div>
    <div class="basket-item-count">
      <img
        class="basket-item-arrow"
        :src="arrowLeftIcon"
        alt="#"
        @click="changeBasketProductQuantity({ id: product.id, operation: 'decrement', newValue: product.count - 1 })"
      />
      {{ product.count }}
      <img
        class="basket-item-arrow"
        :src="arrowRightIcon"
        alt="#"
        @click="changeBasketProductQuantity({ id: product.id, operation: 'increment', newValue: product.count + 1  })"
      />
    </div>
    <div class="basket-item-price">${{ product.price * product.count }}</div>
  </div>
</template>

<script>
import { mapMutations, mapActions } from "vuex";
import crossImg from "../../assets/icons/cross.svg";
import arrowLeftImg from "../../assets/icons/arrow-left.svg";
import arrowRightImg from "../../assets/icons/arrow-right.svg";
import basketTrashImg from "../../assets/icons/basket-trash.svg";

export default {
  name: "BasketItemComponent",
  data: function () {
    return {
      crossIcon: crossImg,
      arrowLeftIcon: arrowLeftImg,
      arrowRightIcon: arrowRightImg,
      basketTrashIcon: basketTrashImg,
      isRemoveBtnVisible: false,
    };
  },
  props: {
    product: Object,
    lastId: Number,
    id: Number,
  },
  methods: {
    ...mapActions(["changeBasketProductQuantity", "removeProductFromBasket"]),
    switchRemoveBtn: function () {
      this.isRemoveBtnVisible = !this.isRemoveBtnVisible;
    },
  },
};
</script>

<style lang="scss" scoped>
$basketBorder: #39394c;
.basket-item {
  border-bottom: 1px solid $basketBorder;
  display: grid;
  grid-template-columns: 70px 230px 100px;
  grid-auto-rows: 35px 35px;
  grid-template-areas:
    "image name count"
    "image name price";
  &-image {
    grid-area: image;
    padding: 5px;
    width: 60px;
    transition: 0.3s;
  }
  &-name {
    grid-area: name;
    font-family: "Open sans light";
    font-size: 14px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  &-count {
    grid-area: count;
    display: flex;
    justify-content: space-around;
    font-family: "Open sans light";
    font-size: 14px;
    line-height: 35px;
  }
  &-price {
    grid-area: price;
    font-family: "Open sans light";
    font-size: 14px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  &-arrow {
    padding: 10px;
    opacity: 0.7;
    &:hover {
      opacity: 1;
    }
  }
  &-last {
    border-bottom: none;
  }
}
</style>
