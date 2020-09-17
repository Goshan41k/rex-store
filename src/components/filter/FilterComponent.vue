<template>
  <div class="filter-custom-select">
    <div class="filter-button" @click="switchFilterState">
      <span class="filter-button-text">{{ filterTitle }}</span>
      <img
        :src="arrowBottomIcon"
        alt="#"
        class="filter-button-arrow"
        :class="{ 'arrow-opened': filterState }"
      />

      <div class="dot dot-left-top"></div>
      <div class="dot dot-right-top"></div>
      <div class="dot dot-left-bottom"></div>
      <div class="dot dot-right-bottom"></div>
    </div>
    <div v-if="filterState && filterType === 'img'" class="filter-keys">
      <div v-for="(item, index) in filterData" :key="index" class="key-with-img">
        <img :src="filterData[index].img" alt />
        <span>{{ filterData[index].name }}</span>
        <div class="dot dot-left-top"></div>
        <div class="dot dot-right-top"></div>
        <div class="dot dot-left-bottom"></div>
        <div class="dot dot-right-bottom"></div>
      </div>
    </div>
    <div v-else-if="filterState && filterType === 'text'" class="filter-keys">
      <div
        v-for="(item, index) in filterData"
        :key="index"
        class="key-without-img"
        :class="{ 'selected-filter-field': filterData[index].filterState}"
        @click="setFilterFn(filterData[index].name.toLowerCase(),  index)"
      >
        {{ filterData[index].name }}
        <div class="dot dot-left-top"></div>
        <div class="dot dot-right-top"></div>
        <div class="dot dot-left-bottom"></div>
        <div class="dot dot-right-bottom"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

import arrowBottomImg from "../../assets/icons/arrow-bottom.svg";

export default {
  name: "FilterComponent",
  data: function () {
    return {
      arrowBottomIcon: arrowBottomImg,
      filterState: false,
    };
  },
  сomputed: {
    ...mapGetters(["currentFilters"]),
  },
  props: {
    filterType: String,
    filterTitle: String,
    filterData: Array,
    switchFilterFieldState: Function,
    setFilter: {
      type: Function,
      default: null,
      required: false,
    },
  },
  methods: {
    switchFilterState: function () {
      this.filterState = !this.filterState;
    },
    setFilterFn(filterName, index) {
      this.switchFilterFieldState(index);
      this.setFilter(filterName);
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

.filter-custom-select {
  margin-bottom: 18px;
}

.filter-button {
  position: relative;
  display: grid;
  grid-template-columns: 2fr 1fr;
  width: 216px;
  height: 32px;
  box-sizing: border-box;
  background: $filterBackgroundUnactive;
  color: $filterFontUnactive;
  &:hover {
    outline: 1px solid $filterBorder;
    background: $filterBackgroundActive;
    color: $fontMain;
    cursor: pointer;
  }
  &-text {
    padding-left: 15px;
    font-size: 12px;
    line-height: 32px;
    font-family: "Open sans light";
    color: inherit;
  }
  &-arrow {
    opacity: 0.8;
    padding: 13px;
    transition: 0.3s;
    &:hover {
      opacity: 1;
    }
  }
}

.selected-filter-field {
  text-decoration: underline;
}

.filter-keys {
  padding-top: 18px;
  width: 216px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 18px;
}

.key-with-img {
  position: relative;
  height: 80px;
  width: 60px;
  background: $filterBackgroundUnactive;
  font-family: "Open sans light";
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  &:hover {
    outline: 1px solid $filterBorder;
    background: $filterBackgroundActive;
    color: $fontMain;
    cursor: pointer;
  }
  & span {
    font-size: 10px;
    color: $fontSecondary;
    padding-top: 10px;
  }
}

.key-without-img {
  position: relative;
  height: 30px;
  width: 98px;
  background: $filterBackgroundUnactive;
  font-family: "Open sans light";
  font-size: 10px;
  color: $fontSecondary;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    outline: 1px solid $filterBorder;
    background: $filterBackgroundActive;
    color: $fontMain;
    cursor: pointer;
  }
}

.arrow-opened {
  transform: scaleY(-1);
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
