<template>
  <div class="product">
    <img :src="product.img" alt="#" class="product-image" />
    <h1 class="product-title">{{this.product.title}}|{{this.product.psu}}</h1>
    <span class="product-price">${{this.product.price}}</span>
    <span class="product-code">{{"Product code: "}}{{this.product.id.slice(0, 7)}}</span>
    <div class="product-button-area">
      <button class="product-button">{{'addToCartButton' | localize}}</button>
    </div>

    <div class="description">
      <div class="description-header">
        <div
          @click="switchDetailsPage('info')"
          :class="{'description-header-nav-active': this.activeDetailsPage === 'info'}"
          class="description-header-nav"
        >{{'productInfo' | localize}}</div>
        <div
          @click="switchDetailsPage('delivery')"
          :class="{'description-header-nav-active': this.activeDetailsPage === 'delivery'}"
          class="description-header-nav"
        >{{'productDelivery' | localize}}</div>
        <div
          @click="switchDetailsPage('returns')"
          :class="{'description-header-nav-active': this.activeDetailsPage === 'returns'}"
          class="description-header-nav"
        >{{'productReturns' | localize}}</div>
      </div>

      <div v-if="this.activeDetailsPage === 'info'" class="details">
        <div class="details-title">{{this.product.title}}</div>
        <p class="details-p">{{this.description}}</p>
        <p class="details-p description-p-code">
          <strong>{{'productCode' | localize}}</strong>
          {{this.product.id.slice(0, 7)}}
        </p>
      </div>

      <div class="details" v-if="this.activeDetailsPage === 'delivery'">
        <div class="details-title">{{'storeDeliveryFirst' | localize}}</div>
        <p class="details-p">{{'storeDeliverySecond' | localize}}</p>
        <div class="details-title">{{'standartDeliveryFirst' | localize}}</div>
        <p class="details-p">{{'standartDeliverySecond' | localize}}</p>
        <div class="details-title">{{'nextDayDeliveryFirst' | localize}}</div>
        <p class="details-p">{{'nextDayDeliverySecond' | localize}}</p>
        <p></p>
        <div class="details-title">{{'europeanDeliveryFirst' | localize}}</div>
      </div>

      <div class="details" v-if="this.activeDetailsPage === 'returns'">
        <p class="details-p">{{'returnsFirstBlock' | localize}}</p>
        <p class="details-p">{{'returnsSecondBlock' | localize}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Product",
  data: function () {
    return {
      activeDetailsPage: "info",
      description:
        " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis accusantium vel rem aspernatur qui quibusdam facilis, velit tenetur deserunt officia esse repellendus, praesentium placeat expedita? Nihil in, optio ullam fuga hic veniam incidunt perferendis possimus reiciendis, molestias est! Quisquam nobis dicta neque ipsam, molestiae, alias laudantium officiis, animi consequuntur necessitatibus placeat. Dolor modi quod, incidunt eos at ea expedita minus dignissimos obcaecati, nemo earum. Vitae, doloremque sunt cupiditate minus ut quod soluta eveniet iste eos voluptatum dolores, nostrum possimus ipsum hic reprehenderit illo quos iure, esse beatae fugiat odit tempora repellat? Eaque ducimus, quia praesentium excepturi et assumenda accusamus porro.",
    };
  },
  methods: {
    switchDetailsPage: function (newPage) {
      this.activeDetailsPage = newPage;
    },
  },
  computed: {
    product() {
      return this.$store.getters.productById(this.$route.params.id);
    },
  },
  mounted() {
    this.product === undefined ? this.$router.push("/") : null;
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
$filterBackgroundUnactive: #232439;
$filterBackgroundActive: #17182e;
$filterFontUnactive: #c4c4c4;
$filterBorder: #2e2f42;

.product {
  margin: 0 auto;
  margin-top: 50px;
  display: grid;
  grid-template-areas:
    "image title"
    "image code"
    "image price"
    "image button"
    "description description";
  grid-template-rows: 60px 30px 80px 80px 1fr;
  grid-template-columns: 400px 300px;
  &-image {
    padding: 10px;
    grid-area: image;
    height: 230px;
    margin: 0 auto;
  }
  &-title {
    margin: 0px;
    grid-area: title;
    font-size: 1rem;
    color: $fontMain;
    font-family: "Open sans light";
  }
  &-code {
    line-height: 30px;
    grid-area: code;
    font-size: 0.6rem;
    color: $fontSecondary;
    font-family: "Open sans light";
  }
  &-price {
    font-family: "Exo regular";
    line-height: 80px;
    grid-area: price;
    font-size: 0.9rem;
  }
  &-button-area {
    grid-area: button;
    box-sizing: border-box;
  }
}

.product-button {
  background: $backgroundDetails;
  margin-top: 20px;
  width: 300px;
  border-radius: 5px;
  height: 38px;
  border: 1px solid $backgroundDetails;
  outline: none;
  font-family: "Open sans light";
  font-size: 12px;
  align-self: flex-start;
  cursor: pointer;
  transition: 0.3s;
  box-sizing: border-box;
  &:hover {
    border: 1px solid $fontMain;
    background: $backgroundMain;
  }
}

strong {
  font-size: 0.65rem;
}

.description {
  width: 100%;
  grid-area: description;
}

.description-header {
  margin-top: 50px;
  display: flex;
  justify-content: center;
  padding-bottom: 1px;
  border-top: 1px solid rgba($fontSecondary, 0.6);
  border-bottom: 1px solid rgba($fontSecondary, 0.6);
}

.description-header-nav {
  user-select: none;
  font-family: "Open sans light";
  font-size: 0.7rem;
  line-height: 70px;
  margin-left: 20px;
  margin-right: 20px;
  box-sizing: border-box;
  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
  &-active {
    border-bottom: 2px solid;
  }
}

.details {
  margin-top: 50px;
}

.details-title {
  font-size: 0.8rem;
  padding-left: 30px;
  font-weight: bold;
}

.details-p {
  padding: 0;
  margin: 0;
  font-family: "Open sans light";
  padding-left: 30px;
  margin-top: 0.65rem;
  margin-bottom: 0.65rem;
  font-size: 0.65rem;
}

.details-p-code {
  font-size: 0.65rem;
}
</style>
