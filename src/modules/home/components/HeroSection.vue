<template>
  <div class="hero-section d-flex align-items-center">
    <div class="d-flex flex-column" style="gap: 14px">
      <div class="launching-soon">
        <span class="hot-tag">{{ $t("hot") }} </span>
        <span class="body-text">
          <a href="https://forms.fillout.com/t/uqCTGJDXGxus">Join Waitlist</a>
        </span>
        <span>
          <i-icon icon="ic:round-arrow-forward" />
        </span>
      </div>

      <h1 class="main-header">
        {{ $t("hero-text") }}
      </h1>
      <p class="body-text">
        <!-- {{ $t("hero-desc") }} -->
        Our mission is to redifine the way individuals and businesses connect.
        <br />
        Imagine a world where communication is effortless inquiries are
        simplified, <br />
        and support is just a click away. <br />
        Antenna is your gateway to this future, and we invite you to be part of
        the revolution!
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

    <div class="text-right hero-img-container align-self-end">
      <img
        class="hero-img shadow-lg animated-bounce"
        src="@/assets/img/leftBar.jpg"
        alt=""
      />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
@keyframes bounce {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(
      -20px
    ); /* Adjust the distance for the bounce effect */
  }
}

.animated-bounce {
  animation: bounce 8s infinite; /* Adjust animation duration and iteration as needed */
}
</style>
