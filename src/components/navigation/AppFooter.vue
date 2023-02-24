<template>
  <div class="app-footer py-4 text-center container">
    <div>
      <ul
        class="mb-0 d-flex align-items-center justify-content-center"
        style="gap: 20px"
      >
        <li class="menu-item">
          {{ $t("nav.faqs") }}
        </li>
        <li class="menu-item">
          {{ $t("nav.privacy") }}
        </li>
        <li class="menu-item">
          {{ $t("nav.terms-and-conditions") }}
        </li>
        <li class="menu-item">
          {{ $t("nav.contact-us") }}
        </li>
        <li class="menu-item">
          {{ $t("nav.press-kit") }}
        </li>
      </ul>

      <div class="social-links">
        <a href="javascripp:void(0)"
          ><i class="fa fa-facebook" aria-hidden="true"></i
        ></a>
        <a href="javascripp:void(0)">
          <i class="fa fa-instagram" aria-hidden="true"></i>
        </a>
        <a href="javascripp:void(0)">
          <i class="fa fa-twitter" aria-hidden="true"></i>
        </a>
        <!-- <a href="javascripp:void(0)">
            
        </a> -->
      </div>
    </div>
  </div>
</template>

<script>
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

<style></style>
