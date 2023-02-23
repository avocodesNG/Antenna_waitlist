<template>
  <div class="app-home">
    <div class="container">
      <HeroSection />
      <WhyGourde class="my-5" />
      <CreateMerchant />
      <DownloadApp class="mt-5 mb-3" />
    </div>
  </div>
</template>

<script>
import CreateMerchant from "../components/createMerchant.vue";
import DownloadApp from "../components/DownloadApp.vue";
import HeroSection from "../components/HeroSection.vue";
import WhyGourde from "../components/whyGourde.vue";
export default {
  components: { HeroSection, WhyGourde, CreateMerchant, DownloadApp },
  name: "HomePage",
};
</script>

<style></style>
