<template>
  <div class="privacy-policy my-4">
    <div class="container">
      <h1 class="main-header mb-3">
        {{ $t("terms-of-use-header") }}
      </h1>
      <hr />
      <div v-html="$t('terms-of-use')"></div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
