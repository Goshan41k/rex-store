<template>
  <div class="blog">
    <div class="blog-title">{{ 'blogSection' | localize }}</div>
    <div class="blog-message">15 aug, 2019 New functions added</div>
  </div>
</template>

<script>
export default {
  name: "Blog",
};
</script>

<style lang="scss" scoped>
$backgroundMain: #0b0c23;
$fontMain: #ffffff;
$fontSecondary: #c4c4c4;

.blog {
  padding-left: 50px;
  width: 200px;
  &-title {
    font-family: "Exo";
    font-size: 24px;
  }
  &-message {
    font-family: "Open sans light";
    font-size: 14px;
    color: $fontSecondary;
  }
}
</style>
