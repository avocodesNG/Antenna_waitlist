<template>
  <div class="">
    <div class="why-gourde mt-5">
      <div
        class="why-gourde-content container-fluid d-flex justify-content-between align-items-center"
      >
        <div class="w-50 d-flex flex-column" style="gap: 20px">
          <h2 class="header-text text-white">{{ $t("transfer") }}</h2>
          <p class="body-text text-white">
            {{ $t("why-gourde-text") }}
          </p>
          <!-- <router-link to="/join-waitlist"> -->
          <a href="https://forms.fillout.com/t/uqCTGJDXGxus">
            <button class="secondary-btn">{{ $t("btn-text") }}</button>
          </a>
          <!-- </router-link> -->
        </div>
        <div class="why-gourde-img align-self-end w-100 text-right">
          <img src="@/assets/img/buz.png" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>
