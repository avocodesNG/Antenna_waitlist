<template>
  <div class="privacy-policy my-4">
    <div class="container">
      <h1 class="main-header mb-3">
        {{ $t("privacy.header") }}
      </h1>
      <hr />
      <p class="body-text">{{ $t("privacy.description") }}</p>
      <div class="mt-3 body-text" v-html="$t('privacy.desc-text')"></div>

      <h2 class="header-text mt-3">
        {{ $t("privacy.header-one") }}
      </h2>
      <div class="mt-3 body-text" v-html="$t('privacy.body-text-one')"></div>

      <li>
        {{ $t("privacy.header-one-a") }}
      </li>
      <div class="mt-3 body-text" v-html="$t('privacy.body-text-one-a')"></div>

      <li>
        {{ $t("privacy.header-one-b") }}
      </li>
      <div class="mt-3 body-text" v-html="$t('privacy.body-text-one-b')"></div>

      <li>
        {{ $t("privacy.header-one-c") }}
      </li>
      <div class="mt-3 body-text" v-html="$t('privacy.body-text-one-c')"></div>

      <h2 class="header-text mt-3">
        {{ $t("privacy.header-two") }}
      </h2>
      <div class="mt-3 body-text" v-html="$t('privacy.body-text-two')"></div>

      <h2 class="header-text mt-3">
        {{ $t("privacy.header-three") }}
      </h2>
      <div class="mt-3 body-text" v-html="$t('privacy.body-text-three')"></div>

      <h2 class="header-text mt-3">
        {{ $t("privacy.header-four") }}
      </h2>
      <div class="mt-3 body-text" v-html="$t('privacy.body-text-four')"></div>

      <h2 class="header-text mt-3">
        {{ $t("privacy.header-five") }}
      </h2>
      <div class="mt-3 body-text" v-html="$t('privacy.body-text-five')"></div>

      <h2 class="header-text mt-3">
        {{ $t("privacy.header-six") }}
      </h2>
      <div class="mt-3 body-text" v-html="$t('privacy.body-text-six')"></div>

      <h2 class="header-text mt-3">
        {{ $t("privacy.contact-us") }}
      </h2>
      <div class="mt-3 body-text" v-html="$t('privacy.contact-us-text')"></div>

      <p class="body-text mt-3">{{ $t("privacy.last-updated") }}</p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
li {
  list-style: decimal;
  font-style: italic;
  color: var(--text-color);
  margin-top: 15px;
}
</style>
