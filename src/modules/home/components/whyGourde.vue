<template>
  <div>
    <h2 class="text-center header-text" style="margin-top: 20% !important">
      {{ $t("why-gourde") }}
    </h2>
    <p class="body-text text-center">{{ $t("fast-better") }}</p>

    <router-link><h2>Business</h2></router-link>
    <router-link
      to="pills"
      class="nav-link"
      href="#"
      style="margin-left: 10%"
    ></router-link>

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
        background-color: rgba(255, 245, 245, 0.478);
        border-radius: 50px !important;
        height: 100vh;
      "
    >
      <div class="col-md-6">
        <div class="row">
          <h1 class="pt-5 pl-5 fw-bolder">Antenna 4 Business</h1>
          <div
            class="card-wrapper"
            style="margin-top: 15%; padding-left: 12% !important"
          >
            <h3 class="">Effortless Interaction</h3>
            <p class="paragraph" style="font-weight: bold">
              Seamlessly reach out to businesses <br />
              for inquiries, support, or engaging <br />
              conversations
            </p>
          </div>
          <div
            class="card-wrapper"
            style="margin-top: 15%; padding-left: 12% !important"
          >
            <h3 class="">Seamless Customer Support</h3>
            <p class="paragraph" style="font-weight: bold">
              Deliver exceptional customer service with <br />
              Antenna.Address inquiries, resolve issues, <br />
              and offer support in real-time, allwithin a <br />
              single, intuitive interface.
            </p>
          </div>
          <div
            class="card-wrapper"
            style="margin-top: 15%; padding-left: 12% !important"
          >
            <h3 class="">Cultivate Growth</h3>
            <p class="paragraph" style="font-weight: bold">
              Expand your customer base, increase brand <br />
              loyalty, and seize opportunities for expansion <br />
              through Antenna's comprehensive features.
            </p>
          </div>
        </div>
      </div>

      <div class="col-md-6">
        <div class="row">
          <h1 class="pt-5 pl-5 fw-bolder">Antenna 4 Customers</h1>
          <div
            class="card-wrapper"
            style="margin-top: 15%; padding-left: 12% !important"
          >
            <h3 class="">Effortless Connections</h3>
            <p class="paragraph" style="font-weight: bold">
              Seamlessly reach out to businesses <br />
              for inquiries, support, or engaging <br />
              conversations
            </p>
          </div>
          <div
            class="card-wrapper"
            style="margin-top: 15%; padding-left: 12% !important"
          >
            <h3 class="paragraph">
              Enhanced Business <br />
              Communication
            </h3>
            <p class="paragraph" style="font-weight: bold">
              Businesses, elevate your customer <br />
              interactions with our suite of effective <br />
              communication tools
            </p>
          </div>
          <div
            class="wrapper3 card-wrapper"
            style="margin-top: 15%; padding-left: 12% !important"
          >
            <h3 class="">Cultivate Growth</h3>
            <p class="paragraph" style="font-weight: bold">
              Antenna is more than a platform; <br />
              it's a catalyst for business expansion <br />
              and brand loyalty.
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
  color: rgb(183, 177, 177);
  font-size: medium;
  font-weight: 100;
  /* font-family: "Times New Roman", Times, serif; */
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
    font-size: 1.2rem;
    /* font-weight: bolder !important; */
  }

  .paragraph {
    font-size: 1rem;
    color: rgb(198, 196, 196) !important;
    margin-bottom: 0% !important;
  }

  .card-wrapper {
    padding-left: 0% !important;
  }
}
</style>
