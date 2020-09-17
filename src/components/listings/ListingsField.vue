<template>
  <div class="listings">
    <div class="listings-header">{{ 'listingsSection' | localize }}</div>
    <div class="listings-list">
      <ProductItem v-for="(item, index) in goods" :key="index" :item="item" />
    </div>
  </div>
</template>

<script>
import ProductItem from "../product/ProductItem";
export default {
  name: "ListingsField",
  components: {
    ProductItem,
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

.listings {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
}

.listings-header {
  font-size: 24px;
  padding-bottom: 16px;
}

.listings-list {
  overflow: hidden;
  overflow-y: scroll;
  display: grid;
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
