<template>
  <div>
    <h2 class="text-center header-text">{{ $t("why-gourde") }}</h2>
    <p class="body-text text-center">{{ $t("fast-better") }}</p>

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
            <img src="@/assets/img/why-gourde-img.png" alt="" />
          </div>
        </div>
      </div>
    </div>

    <div class="container">
      <h2
        class="text-center"
        style="
          padding-top: 15% !important;
          font-size: xx-large;
          font-weight: 900;
        "
      >
        Antenna-Customers
      </h2>
      <div class="row row1" style="margin-top: 9%">
        <div class="col-md-6">
          <div class="">
            <img
              class="shadow-lg"
              src="@/assets/img/messages.png"
              alt=""
              style="width: 300px; height: 500px"
            />
          </div>
        </div>

        <div class="col-md-6 wrapper">
          <div class="row" style="margin-right: 10%">
            <div class="ml-5 wrapper1">
              <h3 class="text-center">Effortless Connections</h3>
              <p class="text-center">
                Seamlessly reach out to businesses for inquiries, support, or
                engaging conversations
              </p>
            </div>
            <div class="mt-4">
              <h3 class="text-center">Enhanced Business Communication</h3>
              <p class="text-center">
                Businesses, elevate your customer <br />
                interactions with our suite of effective <br />
                communication tools
              </p>
            </div>
            <div class="mt-3 wrapper3" style="margin-left: 30%">
              <h3 class="text-center">Cultivate Growth</h3>
              <p class="text-center">
                Antenna is more than a platform; it's a catalyst for business
                expansion <br />
                and brand loyalty.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="container mt-5">
      <h2
        class="text-center"
        style="
          padding-top: 10% !important;
          font-size: xx-large;
          font-weight: 900;
        "
      >
        Antenna-Business
      </h2>
      <div class="row row2" style="margin-top: 9%; margin-bottom: 5%">
        <div class="col-md-6">
          <div class="row" style="margin-right: 10%">
            <div class="">
              <h3 class="text-center">Effortless Interaction</h3>
              <p class="text-center">
                Seamlessly reach out to <br />businesses for inquiries, <br />
                support, or <br />
                engaging conversations
              </p>
            </div>
            <div class="ml-3">
              <h3 class="text-center">Seamless Customer Support</h3>
              <p class="text-center">
                Deliver exceptional customer <br />
                service with Antenna. <br />
                Address inquiries, resolve issues, <br />
                and offer support in real-time, all within a single, <br />
                intuitive interface.
              </p>
            </div>
            <div class="mt-3 ml-3">
              <h3 class="text-center">Cultivate Growth</h3>
              <p class="text-center">
                Expand your customer base, <br />
                increase brand loyalty, and seize opportunities for expansion
                <br />
                through Antenna's comprehensive features.
              </p>
            </div>
          </div>
        </div>

        <div class="col-md-6 imgWrapper">
          <div class="div2" style="margin-left: 35%">
            <img
              class="shadow-lg"
              src="@/assets/img/messages.png"
              alt=""
              style="width: 300px; height: 500px"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
h3 {
  font-weight: 500;
  color: rgb(49, 49, 49);
}

p {
  color: rgb(140, 140, 140);
}

@media (max-width: 990px) {
  .div2 {
    margin: 0% !important;
  }
  .wrapper3 {
    margin: 0% !important;
    text-align: center !important;
  }

  .wrapper1 {
    margin: 0% !important;
    text-align: center !important;
  }

  .wrapper {
    margin-top: 10%;
  }
  .imgWrapper {
    margin-top: 10%;
  }
}
</style>
