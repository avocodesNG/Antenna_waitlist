<template>
  <div class="app-home">
    <div class="container">
      <HeroSection />
      <WhyGourde class="my-5" />
      <DownloadApp class="mt-5 mb-3" />
    </div>
  </div>
</template>

<script>
import DownloadApp from "../components/DownloadApp.vue";
import HeroSection from "../components/HeroSection.vue";
import WhyGourde from "../components/whyGourde.vue";
export default {
  components: { HeroSection, WhyGourde, DownloadApp },
  name: "HomePage",
};
</script>

<style></style>
