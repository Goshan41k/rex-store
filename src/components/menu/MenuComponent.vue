<template>
  <div class="menu-overlay">
    <div class="menu-container">
      <img
        class="menu-btn-close"
        :src="crossIcon"
        alt="#"
        @click="switchMenu"
      />
      <router-link
        class="menu-btn"
        tag="div"
        to="/"
        @click.native="switchMenu"
        >{{ 'menuHomePage' | localize }}</router-link
      >
      <img class="menu-devider" :src="deviderIcon" alt="#" />
      <router-link
        class="menu-btn"
        tag="div"
        to="/about"
        @click.native="switchMenu"
        >{{ 'menuAboutPage' | localize }}</router-link
      >
      <img class="menu-devider" :src="deviderIcon" alt="#" />
      <router-link
        class="menu-btn"
        tag="div"
        to="/support"
        @click.native="switchMenu"
        >{{ 'menuSupportPage' | localize }}</router-link
      >
    </div>
  </div>
</template>

<script>
import { v4 } from 'uuid';

import firebaseAPI from '../../firebase';

import deviderImg from '../../assets/icons/Devider-horizontal.svg';
import crossImg from '../../assets/icons/cross.svg';

export default {
  name: 'MenuComponent',
  data: function() {
    return {
      deviderIcon: deviderImg,
      crossIcon: crossImg,
      database: [
        {
          id: v4(),
          count: 5,
          img: '/img/goods_1.f8fd874b.png',
          price: '137-217',
          priceDiscount: '',
          psu: 'PSU',
          title: 'Antminer S9 10.5-14.5 th/s',
        },
        {
          id: v4(),
          count: 6,
          img: '/img/goods_2.ec46605d.png',
          price: '1385',
          priceDiscount: '',
          psu: 'PSU',
          title: 'Antminer DR5 35 Th/s',
        },
        {
          id: v4(),
          count: 7,
          img: '/img/goods_4.b8645e61.png',
          price: '2209',
          priceDiscount: '2352',
          psu: 'PSU',
          title: 'PandaMiner B3 Pro 4g 230 Mh/s',
        },
        {
          id: v4(),
          count: 8,
          img: '/img/goods_3.ecf98c15.png',
          price: '650',
          priceDiscount: '',
          psu: 'PSU',
          title: 'GPU Enclosure',
        },
        {
          id: v4(),
          count: 9,
          img: '/img/goods_3.ecf98c15.png',
          price: '450',
          priceDiscount: '',
          psu: 'PSU',
          title: 'USED GPU Enclosure',
        },
        {
          id: v4(),
          count: 10,
          img: '/img/goods_1.f8fd874b.png',
          price: '153',
          priceDiscount: '',
          psu: 'PSU',
          title: 'USER Antminer S9 10.5-14.5 th/s',
        },
        {
          id: v4(),
          count: 5,
          img: '/img/goods_1.f8fd874b.png',
          price: '716',
          priceDiscount: '',
          psu: 'GPU',
          title: 'NVIDIA GeForce RTX 2080 Ti',
        },
        {
          id: v4(),
          count: 6,
          img: '/img/goods_2.ec46605d.png',
          price: '524',
          priceDiscount: '',
          psu: 'GPU',
          title: 'NVIDIA GeForce RTX 1070 SLI',
        },
        {
          id: v4(),
          count: 7,
          img: '/img/goods_4.b8645e61.png',
          price: '726',
          priceDiscount: '699',
          psu: 'GPU',
          title: 'NVIDIA GeForce RTX 2080 Super',
        },
        {
          id: v4(),
          count: 8,
          img: '/img/goods_3.ecf98c15.png',
          price: '4171',
          priceDiscount: '',
          psu: 'GPU',
          title: 'NVIDIA Quadro RTX 6000',
        },
        {
          id: v4(),
          count: 9,
          img: '/img/goods_3.ecf98c15.png',
          price: '357',
          priceDiscount: '',
          psu: 'GPU',
          title: 'NVIDIA GeForce GTX 980 SLI ',
        },
        {
          id: v4(),
          count: 10,
          img: '/img/goods_1.f8fd874b.png',
          price: '1041',
          priceDiscount: '',
          psu: 'GPU',
          title: 'NVIDIA GeForce GTX 1080 Ti',
        },
        {
          id: v4(),
          count: 5,
          img: '/img/goods_1.f8fd874b.png',
          price: '216',
          priceDiscount: '',
          psu: 'CPU',
          title: 'AMD Ryzen 9 3950X 3.5 GHz/16 core',
        },
        {
          id: v4(),
          count: 6,
          img: '/img/goods_2.ec46605d.png',
          price: '324',
          priceDiscount: '',
          psu: 'CPU',
          title: 'Intel Core i9-7900X 3.3 GHz/10 core',
        },
        {
          id: v4(),
          count: 7,
          img: '/img/goods_4.b8645e61.png',
          price: '176',
          priceDiscount: '699',
          psu: 'CPU',
          title: 'AMD Ryzen 3800X 3.9 GHz/8 core',
        },
        {
          id: v4(),
          count: 8,
          img: '/img/goods_3.ecf98c15.png',
          price: '171',
          priceDiscount: '',
          psu: 'CPU',
          title: 'AMD Ryzen 7 3800X BOX 3.9 GHz/8 core',
        },
        {
          id: v4(),
          count: 9,
          img: '/img/goods_3.ecf98c15.png',
          price: '257',
          priceDiscount: '',
          psu: 'CPU',
          title: 'Intel Core i9-10900 2.8 GHz/10 core',
        },
        {
          id: v4(),
          count: 10,
          img: '/img/goods_1.f8fd874b.png',
          price: '241',
          priceDiscount: '',
          psu: 'CPU',
          title: 'Intel Core i9-9900 3.1 GHz/8 core',
        },
      ],
    };
  },
  props: {
    switchMenu: {
      type: Function,
    },
  },
  methods: {
    pushToDB: function() {
      this.database.forEach((x) => {
        firebaseAPI
          .database()
          .ref('goods')
          .push(x);
      });
    },
  },
};
</script>

<style lang="scss" scoped>
$backgroundMain: #0b0c23;
$fontMain: #ffffff;
$fontSecondary: #c4c4c4;

.menu-overlay {
  z-index: 4;
  position: fixed;
  bottom: 0px;
  top: 0px;
  left: 0px;
  right: 0px;
  width: 100%;
  height: 100vh;
  background: rgba(black, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
}

.menu-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.menu-btn {
  font-size: 30px;
  color: $fontSecondary;
  transition: 0.3s;
  margin-top: 48px;
  margin-bottom: 48px;
  &:hover {
    color: $fontMain;
    cursor: pointer;
  }
}

.menu-btn-close {
  width: 20px;
  padding: 10px;
  opacity: 0.7;
  cursor: pointer;
  &:hover {
    opacity: 1;
  }
}
</style>
