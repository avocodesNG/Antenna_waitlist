<template>
  <div>
    <h2 class="text-center header-text" style="margin-top: 20% !important">
      {{ $t("why-gourde") }}
    </h2>
    <p class="body-text text-center">{{ $t("fast-better") }}</p>

    <router-link><h2>Business</h2></router-link>
    <router-link to="pills" class="nav-link" href="#" style="margin-left: 10%"
      >Users</router-link
    >

    <div class="" v-if="!isUsersRoute">
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

    <div
      class="row wrapper"
      style="
        margin-top: 15%;
        background-color: rgb(161, 188, 188);
        border-radius: 50px !important;
        height: 100vh;
      "
    >
      <div class="col-md-6">
        <div class="row">
          <h1 class="pt-5">Antenna-Business</h1>
          <div class="" style="margin-top: 15%">
            <h3 class="">Effortless Interaction</h3>
            <p class="" style="font-weight: bold">
              Seamlessly reach out to businesses for inquiries, support, or
              engaging conversations
            </p>
          </div>
          <div class="" style="margin-top: 15%">
            <h3 class="">Seamless Customer Support</h3>
            <p class="" style="font-weight: bold">
              Deliver exceptional customer service with Antenna.Address
              inquiries, resolve issues, and offer support in real-time,
              allwithin a single, intuitive interface.
            </p>
          </div>
          <div class="" style="margin-top: 15%">
            <h3 class="">Cultivate Growth</h3>
            <p class="" style="font-weight: bold">
              Expand your customer base, increase brand loyalty, and seize
              opportunities for expansion through Antenna's comprehensive
              features.
            </p>
          </div>
        </div>
      </div>

      <div class="col-md-6">
        <div class="row">
          <h1 class="pt-5">Antenna-Customers</h1>
          <div class="" style="margin-top: 15%">
            <h3 class="">Effortless Connections</h3>
            <p class="" style="font-weight: bold">
              Seamlessly reach out to businesses for inquiries, support, or
              engaging conversations
            </p>
          </div>
          <div class="" style="margin-top: 15%">
            <h3 class="">Enhanced Business Communication</h3>
            <p class="" style="font-weight: bold">
              Businesses, elevate your customer interactions with our suite of
              effective communication tools
            </p>
          </div>
          <div class="wrapper3" style="margin-top: 15%">
            <h3 class="">Cultivate Growth</h3>
            <p class="" style="font-weight: bold">
              Antenna is more than a platform; it's a catalyst for business
              expansion and brand loyalty.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    isUsersRoute() {
      return this.$route.path.includes("/pills");
    },
  },
};
</script>

<style scoped>
h3 {
  font-weight: 500;
  color: rgb(49, 49, 49);
}

p {
  color: rgb(226, 226, 226);
  font-size: large;
}

@media (max-width: 990px) {
  .wrapper {
    text-align: center;
    height: 170vh !important;
  }

  h1 {
    font-size: 1.5rem;
    text-align: center !important;
    /* padding-top:  !important; */
  }

  .wrapper h3 {
    font-size: 1.2rem; /* Adjust font size for smaller screens */
  }

  .wrapper p {
    font-size: 1rem; /* Adjust font size for smaller screens */
  }
}
</style>
