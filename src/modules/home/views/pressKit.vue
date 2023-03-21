<template>
  <div class="press-kit py-4">
    <div class="container">
      <h1 class="main-header mb-3">
        {{ $t("nav.press-kit") }}
      </h1>
      <hr />
      <div class="body-text" v-html="$t('press-kit.desc')"></div>

      <div class="d-lg-flex" style="gap: 22px">
        <a
          href="/files/logos marks.zip"
          class="press-kit-files w-100 mt-5 mb-4"
          download
        >
          <div>
            <img
              class="d-block mx-auto"
              src="@/assets/img/logos/2.png"
              width="80%"
              alt=""
            />
            <div class="d-flex align-items-center justify-content-between mt-3">
              <h6 class="mt-3 text-dark">
                {{ $t("press-kit.logo-marks") }}
              </h6>
              <i-icon
                icon="el:download"
                width="20px"
                color="var(--primary-color)"
              />
            </div>
          </div>
        </a>

        <a
          href="/files/product images.zip"
          class="press-kit-files w-100 mt-5 mb-4"
          download=""
        >
          <div>
            <img
              class="d-block mx-auto"
              src="@/assets/img/product-screens/Onboarding Screen.jpg"
              width="80%"
              alt=""
            />
            <div class="d-flex align-items-center justify-content-between mt-3">
              <h6 class="mt-3 text-dark">
                {{ $t("press-kit.product-screens") }}
              </h6>
              <i-icon
                icon="el:download"
                width="20px"
                color="var(--primary-color)"
              />
            </div>
          </div>
        </a>
      </div>

      <a href="/files/founder.jpeg" class="press-kit-files w-50" download>
        <div>
          <img
            class="d-block mx-auto"
            src="@/assets/img/founder.jpeg"
            width="80%"
            alt=""
          />
          <div class="d-flex align-items-center justify-content-between mt-3">
            <h6 class="mt-3 text-dark">
              {{ $t("press-kit.founder") }}
            </h6>
            <i-icon
              icon="el:download"
              width="20px"
              color="var(--primary-color)"
            />
          </div>
        </div>
      </a>

      <!-- <h2 class="header-text mt-3">
        {{ $t("press-kit.founder") }}
      </h2>
      <div class="founder my-3">
        <img src="@/assets/img/founder.jpeg" alt="" />
      </div>
      <div class="body-text" v-html="$t('press-kit.founder-name')"></div> -->

      <div class="text-center mt-5">
        <img src="@/assets/img/icon.svg" width="60" alt="" />
        <h2 class="header-text my-4">
          {{ $t("press-kit.contact-us") }}
        </h2>
        <h6 class="">
          {{ $t("press-kit.contact-us-text") }}
        </h6>
        <a href="mailto:press@gourdeapp.com">press@gourdeapp.com</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    checkWindow() {
      console.log(window);
    },
  },
};
</script>

<style></style>
