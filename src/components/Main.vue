<template>
  <div class="main">
    <FiltersField />
    <ProductsField :goods="productsAfterFilter.length === 0 ? products : productsAfterFilter" />
    <ListingsField :goods="products" />
    <NewsField />
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

import FiltersField from "./filter/FiltersField";
import ProductsField from "./product/ProductsField";
import ListingsField from "./listings/ListingsField";
import NewsField from "./news/NewsField";

export default {
  name: "Main",
  data: function () {
    return {
      screenWidth: window.innerWidth,
      isFiltersHide: false,
    };
  },
  computed: {
    ...mapGetters(["products", "productsAfterFilter"]),
  },
  components: {
    FiltersField,
    ProductsField,
    ListingsField,
    NewsField,
  },
  methods: {
    ...mapActions(["fetchProducts"]),
    updateScreenWidth() {
      this.screenWidth = window.innerWidth;
    },
  },
  mounted() {
    this.fetchProducts();
  },
  created() {
    window.addEventListener("resize", this.updateScreenWidth);
  },
};
</script>

<style lang="scss" scoped>
.main {
  width: 100%;
  display: grid;
  grid-template-columns: 216px minmax(216px, 720px) 233px 216px;
  grid-template-rows: 100%;
  overflow: hidden;
  gap: 20px;
  margin-top: 75px;
}
</style>
