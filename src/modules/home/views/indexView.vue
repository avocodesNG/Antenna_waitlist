<template>
  <div class="app-home">
    <div class="container">
      <HeroSection />
      <WhyGourde class="my-5" />
      <CreateMerchant class="mb-5" />
    </div>
  </div>
</template>

<script>
import CreateMerchant from "../components/createMerchant.vue";
import HeroSection from "../components/HeroSection.vue";
import WhyGourde from "../components/whyGourde.vue";
export default {
  components: { HeroSection, WhyGourde, CreateMerchant },
  name: "HomePage",
};
</script>

<style></style>
