<template>
  <div class="app-footer py-4 text-center container mt-5">
    <footer class="text-center bg-body-tertiary row">
      <div class="col-md-6">
        <div class="d-flex justify-content-around">
          <span><i class="bi bi-linkedin"></i></span>
          <span><i class="bi bi-twitter-x"></i></span>
          <span><i class="bi bi-instagram"></i></span>
        </div>
      </div>

      <div class="col-md-6 wrapper2">
        <!-- Copyright -->
        <div class="text-center p-3">
          © 2023 Copyright:
          <a class="text-body" href="https://antenna.so/">Antenna</a>
        </div>
        <!-- Copyright -->
      </div>
    </footer>
  </div>
</template>

<script>
import "bootstrap-icons/font/bootstrap-icons.css";

export default {
  data: () => {
    return {
      nav_menu: [
        {
          id: 1,
          title: "faqs",
        },
        {
          id: 2,
          title: "privacy",
        },
        {
          id: 3,
          title: "terms-and-conditions",
        },
        {
          id: 4,
          title: "contact-us",
        },
        {
          id: 5,
          title: "press-kit",
        },
      ],
    };
  },
};
</script>

<style scoped>
.bi {
  font-size: xx-large !important;
  color: blue;
}

/* @media (max-width: 990px) {
  .wrapper {
    margin-top: 40rem !important;
  }
} */
</style>
