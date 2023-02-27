<template>
  <div class="press-kit py-4">
    <div class="container">
      <h1 class="main-header mb-3">
        {{ $t("nav.press-kit") }}
      </h1>
      <hr />
      <div class="body-text" v-html="$t('press-kit.desc')"></div>

      <h2 class="header-text mt-3">
        {{ $t("press-kit.logo-marks") }}
      </h2>
      <div class="logo-images row mt-3">
        <img
          src="@/assets/img/logos/1.png"
          class="col-12 col-md-4 mb-2"
          alt=""
        />
        <img
          src="@/assets/img/logos/2.png"
          class="col-12 col-md-4 mb-2"
          alt=""
        />
        <img
          src="@/assets/img/logos/3.png"
          class="col-12 col-md-4 mb-2"
          alt=""
        />
      </div>

      <h2 class="header-text mt-3">
        {{ $t("press-kit.product-screens") }}
      </h2>
      <div class="product-screens">
        <img
          src="@/assets/img/product-screens/Sign Up Screen.jpg"
          class="col-6 col-md-4 mb-2"
          alt=""
        />
        <img
          src="@/assets/img/product-screens/Language Screen.jpg"
          class="col-6 col-md-4 mb-2"
          alt=""
        />
        <img
          src="@/assets/img/product-screens/My Cards Screen.jpg"
          class="col-6 col-md-4 mb-2"
          alt=""
        />
        <img
          src="@/assets/img/product-screens/Onboarding Screen.jpg"
          class="col-6 col-md-4 mb-2"
          alt=""
        />
        <img
          src="@/assets/img/product-screens/Opening Screen.jpg"
          class="col-6 col-md-4 mb-2"
          alt=""
        />
        <img
          src="@/assets/img/product-screens/Send Cash Screen.jpg"
          class="col-6 col-md-4 mb-2"
          alt=""
        />
        <img
          src="@/assets/img/product-screens/Contact Screen.jpg"
          class="col-6 col-md-4 mb-2"
          alt=""
        />
      </div>

      <h2 class="header-text mt-3">
        {{ $t("press-kit.founder") }}
      </h2>
      <div class="founder my-3">
        <img src="@/assets/img/founder.jpeg" alt="" />
      </div>
      <div class="body-text" v-html="$t('press-kit.founder-name')"></div>

      <h2 class="header-text mt-3">
        {{ $t("press-kit.contact-us") }}
      </h2>
      <p class="body-text">
        {{ $t("press-kit.contact-us-text") }}
      </p>
      <a href="mailto:press@gourdeapp.com">press@gourdeapp.com</a>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
