<template>
  <div class="support">
    <div class="support-section">
      <div class="support-header">Delivery</div>
      <hr class="support-hr" />
      <p class="support-p">We work allover the world.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Support",
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

.support-section {
  width: 340px;
  background: $filterBackgroundUnactive;
}

.support-header {
  font-family: "Exo regular";
  height: 60px;
  line-height: 60px;
  font-size: 1rem;
  font-weight: 500;
  text-align: center;
}

.support-p {
  font-family: "Exo regular";
  font-size: 0.8rem;
  font-weight: 400;
}

hr {
  margin: 0;
  color: $backgroundMain;
}
</style>