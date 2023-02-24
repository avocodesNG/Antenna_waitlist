<template>
  <div class="app-footer py-4 text-center container">
    <div>
      <ul
        class="mb-0 d-flex align-items-center justify-content-center"
        style="gap: 20px"
      >
        <li class="menu-item" v-for="item in nav_menu" :key="item.id">
          {{ item.title }}
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
          title: "FAQs",
        },
        {
          id: 2,
          title: "Privacy",
        },
        {
          id: 3,
          title: "Terms and Conditions",
        },
        {
          id: 4,
          title: "Contact Us",
        },
        // {
        //   id: 5,
        //   title: "Help",
        // },
      ],
    };
  },
};
</script>

<style></style>
