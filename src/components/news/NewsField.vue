<template>
  <div class="news">
    <div class="news-header">{{ 'newsSection' | localize }}</div>
    <div class="news-body">
      <img class="news-logo" :src="newsLogoIcon" alt="#" />
      <div class="news-title">
        <strong>HASH</strong>ONE
      </div>
      <div class="news-bold-text">THE STANDARD FOR CRYPTO CONSULTING</div>
      <div class="news-standart-text">
        <p class="news-standart-text-p">Mining Operations</p>
        <p class="news-standart-text-p">ICO (Initial Coin Offering)</p>
        <p class="news-standart-text-p">New Business Investment</p>
        <p class="news-standart-text-p">Blockchain Technology</p>
      </div>
      <img class="news-image" :src="newsImageIcon" alt="#" />
      <div class="dot dot-left-top"></div>
      <div class="dot dot-right-top"></div>
      <div class="dot dot-left-bottom"></div>
      <div class="dot dot-right-bottom"></div>
    </div>
  </div>
</template>


<script>
import newsLogo from "../../assets/images/news-logo.png";
import newsImage from "../../assets/images/news-image.png";
export default {
  name: "NewsField",
  data: function () {
    return {
      newsLogoIcon: newsLogo,
      newsImageIcon: newsImage,
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
};
</script>

<style lang="scss" scoped>
$filterBackgroundUnactive: #232439;
$fontSecondary: #c4c4c4;

.news {
  overflow: hidden;
  display: grid;
  grid-template-rows: 48px 1fr;
  margin: 0 auto;
  min-width: 216px;
}

.news-header {
  font-size: 24px;
  padding-bottom: 16px;
}

.news-body {
  background: $filterBackgroundUnactive;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  overflow: hidden;
}

.news-logo {
  width: 50px;
}

.news-title {
  font-size: 24px;
  font-family: "Exo regular";
  & strong {
    font-size: 24px;
    font-family: "Exo regular";
  }
}

.news-bold-text {
  font-size: 26px;
  font-family: "Exo";
  text-align: center;
}

.news-standart-text-p {
  font-size: 12px;
  font-family: "Open sans regular";
  text-align: center;
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