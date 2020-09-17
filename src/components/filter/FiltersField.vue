<template>
  <div class="filters">
    <div class="filters-header">{{ 'filtersSection' | localize }}</div>
    <!-- <FilterComponent :filterTitle="'filterByAlgorithm' | localize" :filterType="textType" />
    <FilterComponent
      :filterTitle="'filterByCoin' | localize"
      :filterType="imgType"
      :filterData="coinsData"
    />
    <FilterComponent :filterTitle="'filterByEquipment' | localize" :filterType="textType" />-->
    <FilterComponent
      :filterTitle="'filterByManufacturer' | localize"
      :filterType="textType"
      :filterData="manufacturerData"
      :setFilter="setManufacturerFilter"
      :switchFilterFieldState="switchFilterFieldState"
    />

    <input
      v-model="priceFrom"
      @change="setPriceFromFilter"
      type="input"
      class="filter-input"
      :placeholder="'filterByMinPrice' | localize"
    />
    <input
      @change="setPriceToFilter"
      v-model="priceTo"
      type="input"
      class="filter-input"
      :placeholder="'filterByMaxPrice' | localize"
    />
    <input
      type="input"
      class="filter-input"
      v-model="searchString"
      @change="setSearchString"
      :placeholder="'filterSearch' | localize"
    />
    <button class="filters-btn" @click="applyFilters">{{'useFilter' | localize}}</button>
    <button class="filters-btn" @click="cleanFiltersHandler">{{'cleanFilter' | localize}}</button>
  </div>
</template>

<script>
import { mapMutations, mapActions } from "vuex";

import FilterComponent from "./FilterComponent";

import BTC from "../../assets/images/coins/BTC-img.png";
import PPC from "../../assets/images/coins/PPC-img.png";
import ETP from "../../assets/images/coins/ETP-img.png";

export default {
  name: "FiltersField",
  components: {
    FilterComponent,
  },
  data: function () {
    return {
      priceFrom: "",
      priceTo: "",
      searchString: "",
      textType: "text",
      imgType: "img",
      coinsData: [
        { name: "BTC", img: BTC },
        { name: "PPC", img: PPC },
        { name: "ETP", img: ETP },
      ],
      manufacturerData: [
        { name: "AMD", filterState: false },
        { name: "Boundary Electric", filterState: false },
        { name: "Pandaminer", filterState: false },
        { name: "Nvidia", filterState: false },
      ],
    };
  },
  methods: {
    ...mapActions(["applyFilters"]),
    ...mapMutations([
      "updateFilterManufacturers",
      "updateFilterPriceFrom",
      "updateFilterPriceTo",
      "updateSearchString",
      "refreshFilters",
    ]),
    setManufacturerFilter: function (brandname) {
      this.updateFilterManufacturers(brandname);
    },
    setPriceFromFilter: function () {
      this.updateFilterPriceFrom(this.priceFrom);
    },
    setPriceToFilter: function () {
      this.updateFilterPriceTo(this.priceTo);
    },
    setSearchString: function () {
      this.updateSearchString(this.searchString);
    },
    refreshFilterFields: function () {
      this.priceFrom = "";
      this.priceTo = "";
      this.searchString = "";
    },
    useFiltersHandler: function () {
      this.applyFilters();
    },
    cleanFiltersHandler: function () {
      this.manufacturerData.forEach(x => x.filterState = false)
      this.refreshFilters();
      this.refreshFilterFields();
      this.applyFilters();
    },
    switchFilterFieldState: function (index) {
      this.manufacturerData[index].filterState = !this.manufacturerData[index]
        .filterState;
    },
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

.filters-header {
  font-size: 24px;
  padding-bottom: 16px;
}

.filter-input {
  margin-bottom: 16px;
  padding-left: 10px;
  color: $fontMain;
  font-family: "Open sans light";
  font-size: 12px;
  width: 216px;
  height: 32px;
  box-sizing: border-box;
  border: none;
  outline: none;
  background: $filterBackgroundUnactive;
  background-image: url("../../assets/images/backgrounds/filter-background.png");
  &:focus {
    outline: 1px solid $filterBorder;
    background: $filterBackgroundActive;
    background-image: url("../../assets/images/backgrounds/filter-background.png");
    color: $fontMain;
  }
}

.filters-btn {
  margin-bottom: 16px;
  border: none;
  outline: none;
  width: 216px;
  height: 32px;
  font-size: 12px;
  box-sizing: border-box;
  background: $filterBackgroundUnactive;
  color: $filterFontUnactive;
  background-image: url("../../assets/images/backgrounds/filter-background.png");
  &:hover {
    outline: 1px solid $filterBorder;
    background: $filterBackgroundActive;
    background-image: url("../../assets/images/backgrounds/filter-background.png");
    color: $fontMain;
    cursor: pointer;
  }
}
</style>
