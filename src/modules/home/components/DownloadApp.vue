<template>
  <div class="download-app container-fluid">
    <div class="text-center d-flex flex-column" style="gap: 14px">
      <h1 class="text-white">{{ $t("fun-better") }}</h1>
      <p class="text-white">
        {{ $t("giving-undeserved") }}
      </p>
      <div
        class="download-app-img d-flex justify-content-center"
        style="gap: 20px"
      >
        <img src="@/assets/img/google-store.png" alt="" />
        <img src="@/assets/img/apple-store.png" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.download-app {
  margin-top: 10% !important;
}

@media (max-width: 990px) {
  .download-app {
    margin-top: 1% !important;
  }
}
</style>
