<template>
  <div class="hero-section d-flex align-items-center">
    <div class="d-flex flex-column" style="gap: 14px">
      <div class="launching-soon">
        <span class="hot-tag">{{ $t("hot") }} </span>
        <span class="body-text">{{ $t("launching-soon") }}</span>
        <span>
          <i-icon icon="ic:round-arrow-forward" />
        </span>
      </div>

      <h1 class="main-header">
        {{ $t("hero-text") }}
      </h1>
      <p class="body-text">
        {{ $t("hero-desc") }}
      </p>
      <!-- <router-link to="/join-waitlist"> -->

      <a href="https://forms.fillout.com/t/uqCTGJDXGxus">
        <button
          class="primary-btn d-flex align-items-center"
          style="gap: 3px; width: max-content"
        >
          <span>{{ $t("btn-text") }}</span>
          <span>
            <i-icon icon="ic:round-arrow-outward" width="13px" />
          </span>
        </button>
      </a>

      <!-- </router-link> -->
    </div>

    <!-- <div>
      <h2>hello</h2>
    </div> -->

    <div class="text-right w-100 hero-img-container align-self-end">
      <img class="hero-img shadow-lg" src="@/assets/img/hero.svg" alt="" />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
