<template>
  <div class="about">
    <h1>{{'aboutHeader' | localize}}</h1>
    <p>{{'aboutFirstParagraph' | localize}}</p>
    <p>{{'aboutSecondParagraph' | localize}}</p>
    <p>{{'aboutThirdParagraph' | localize}}</p>
    <h2>{{'aboutSecondHeader' | localize}}</h2>
    <div class="about-partners">
      <img :src="nvidiaLogo" alt="#" />
      <img :src="amdLogo" alt="#" />
      <img :src="intelLogo" alt="#" />
      <img :src="alienwareLogo" alt="#" />
    </div>
    <h2>{{'aboutThirdHeader' | localize}}</h2>
  </div>
</template>

<script>
import nvidiaImg from "../assets/images/logo/nvidia_logo.png";
import amdImg from "../assets/images/logo/amd_logo.png";
import intelImg from "../assets/images/logo/intel_logo.png";
import alienwareImg from "../assets/images/logo/alienware_logo.png";
export default {
  name: "About",
  data: function () {
    return {
      nvidiaLogo: nvidiaImg,
      amdLogo: amdImg,
      intelLogo: intelImg,
      alienwareLogo: alienwareImg,
    };
  },
};
</script>

<style lang='scss' scoped>
$fontSecondary: #c4c4c4;

.about {
  user-select: none;
}

.about-partners {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 50px;
}
h1 {
  text-align: center;
  font-size: 1.8rem;
}

p {
  font-family: "Open sans light";
  color: $fontSecondary;
  padding: 10px;
}

img {
  height: 30px;
}

h2 {
  text-align: center;
  font-size: 1.4rem;
}
</style>