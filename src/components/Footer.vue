<template>
  <div class="footer">
    <div class="footer-left">
      <div class="footer-rate">
        <div class="rate-mark">4,9</div>
        <div class="rate-msg">Great service and price!</div>
        <div class="rate-author">David Smith</div>
        <div class="rate-star">
          <img :src="star" alt="#" />
          <img :src="star" alt="#" />
          <img :src="star" alt="#" />
          <img :src="star" alt="#" />
          <img :src="star" alt="#" />
        </div>
      </div>
    </div>
    <div class="footer-middle">
      <img :src="facebookLink" alt="#" />
      <img :src="twitterLink" alt="#" />
      <img :src="youtubeLink" alt="#" />
      <img :src="faceLink" alt="#" />
    </div>
    <div class="footer-right">
      <img class="footer-achievment" :src="bronze" alt="#" />
      <img class="footer-achievment" :src="platinum" alt="#" />
      <img class="footer-achievment" :src="silver" alt="#" />
      <img class="footer-achievment" :src="gold" alt="#" />
    </div>
  </div>
</template>

<script>
import bronzeImg from "../assets/icons/footer-achievments/Achievment_bronze.svg";
import goldImg from "../assets/icons/footer-achievments/Achievment_gold.svg";
import platinumImg from "../assets/icons/footer-achievments/Achievment_platinum.svg";
import silverImg from "../assets/icons/footer-achievments/Achievment_silver.svg";
import starImg from "../assets/icons/footer-achievments/Rate-star-icon.svg";

import twitterImg from "../assets/images/social-media/twitter-link.png";
import youtubeImg from "../assets/images/social-media/youtube-link.png";
import faceImg from "../assets/images/social-media/face-link.png";
import facebookImg from "../assets/images/social-media/facebook-link.png";
export default {
  name: "Footer",
  data: function () {
    return {
      bronze: bronzeImg,
      gold: goldImg,
      platinum: platinumImg,
      silver: silverImg,
      star: starImg,
      twitterLink: twitterImg,
      youtubeLink: youtubeImg,
      faceLink: faceImg,
      facebookLink: facebookImg,
    };
  },
};
</script>

<style lang="scss" scoped>
$backgroundMain: #0b0c23;
$fontMain: #ffffff;
$fontSecondary: #c4c4c4;

.footer {
  margin-bottom: 30px;
  height: 63px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  &-left {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  &-middle {
    display: flex;
    justify-content: center;
    align-items: center;
    & img {
      margin-left: 10px;
      margin-right: 10px;
      cursor: pointer;
    }
  }
  &-right {
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
}
.footer-rate {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-auto-rows: 1fr 1fr;
  grid-template-areas:
    "mark msg msg"
    "mark star author";
}
.rate-mark {
  grid-area: mark;
  font-size: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.rate-msg {
  grid-area: msg;
  font-size: 12px;
  color: $fontSecondary;
  font-family: "Open sans light";
  display: flex;
  align-items: flex-end;
}
.rate-author {
  grid-area: author;
  font-size: 10px;
  color: $fontSecondary;
  font-family: "Open sans light";
  display: flex;
  justify-content: center;
  align-items: flex-start;
}
.rate-star {
  grid-area: star;
  display: flex;
  justify-content: center;
  align-items: flex-start;
}

.footer-achievment {
  height: 32px;
}
</style>
