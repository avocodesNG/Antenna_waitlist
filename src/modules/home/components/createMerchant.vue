<template>
  <div>
    <div class="create-merchant-container">
      <div
        class="create-merchant d-flex flex-column container-fluid justify-content-between align-items-center"
      >
        <div>
          <h2 class="header-text mt-4 mb-3">
            {{ $t("create-merchant-header") }}
          </h2>
          <p class="body-text">
            {{ $t("create-merchant-text") }}
          </p>
        </div>
        <div class="">
          <img src="@/assets/img/safe-data.png" alt="" />
        </div>
      </div>
      <div
        class="safe-data d-flex flex-column container-fluid justify-content-between align-items-center"
      >
        <div>
          <h2 class="header-text mt-4 mb-3">{{ $t("safe-data-header") }}</h2>
          <p class="body-text">
            {{ $t("safe-data-text") }}
          </p>
        </div>
        <div class="">
          <img src="@/assets/img/create-merchant.png" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
