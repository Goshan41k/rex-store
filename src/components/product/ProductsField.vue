<template>
  <div class="products">
    <div class="products-header">{{ 'onSaleSection' | localize }}</div>
    <div class="products-list">
      <ProductItem v-for="(item, index) in goods" :key="index" :item="item" />
    </div>
  </div>
</template>

<script>
import ProductItem from "./ProductItem";

export default {
  name: "ProductsField",
  components: {
    ProductItem,
  },
  data: function () {
    return {
      screenWidth: window.innerWidth,
    };
  },
  methods: {
    updateScreenWidth() {
      this.screenWidth = window.innerWidth;
    },
  },
  created() {
    window.addEventListener("resize", this.updateScreenWidth);
  },
  props: {
    goods: Array,
  },
};
</script>

<style lang="scss" scoped>
$backgroundMain: #0b0c23;
$fontMain: #ffffff;
$fontSecondary: #c4c4c4;

.products {
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.products-header {
  padding-bottom: 16px;
  font-size: 24px;
}

.products-list {
  overflow-y: scroll;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

::-webkit-scrollbar {
  width: 5px;
}

::-webkit-scrollbar-track {
  background: $fontSecondary;
  border: 2px solid transparent;
  background-clip: content-box;
}

::-webkit-scrollbar-thumb {
  background: $fontMain;
  border-bottom: 10px solid $backgroundMain;
  border-top: 10px solid $backgroundMain;
}
</style>
