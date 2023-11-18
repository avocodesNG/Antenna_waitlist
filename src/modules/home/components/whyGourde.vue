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

    <!-- <div style="margin-top: 15%">
      <h2 class="text-center font-weight-bold">Antenna Customers</h2>
    </div> -->
    <div class="d-flex flex-row" style="margin-top: 15%; margin-bottom: 10%">
      <div>
        <img
          src="@/assets/img/why-gourde-img.png"
          alt=""
          style="width: 350px"
        />
      </div>

      <div class="row" style="margin-left: 8%">
        <div class="col-md-6">
          <h3 class="text-center">Effortless Connections</h3>
          <p class="text-center">
            Seamlessly reach out to <br />businesses for inquiries, <br />
            support, or <br />
            engaging conversations
          </p>
        </div>
        <div class="col-md-6">
          <h3 class="text-center">Limitless Access</h3>
          <p class="text-center">
            Discover and connect <br />with any company, <br />anywhere, at your
            fingertips
          </p>
        </div>
        <div class="col-md-6 mt-3">
          <h3 class="text-center">Enhanced Business Communication</h3>
          <p class="text-center">
            Businesses, elevate <br />
            your customer interactions <br />
            with our suite of effective <br />
            communication tools
          </p>
        </div>

        <div class="col-md-6 mt-3">
          <h3 class="text-center">Cultivate Growth</h3>
          <p class="text-center">
            Antenna is more than a platform; <br />
            it's a catalyst for business expansion <br />
            and brand loyalty.
          </p>
        </div>
      </div>
    </div>

    <!-- <div style="margin-top: 15%">
      <h2 class="text-center">Antenna Business</h2>
    </div> -->
    <div class="d-flex flex-row" style="margin-top: 15%; margin-bottom: 10%">
      <div class="row" style="margin-right: 10%">
        <div class="col-md-6">
          <h3 class="text-center">Effortless Interaction</h3>
          <p class="text-center">
            Seamlessly reach out to <br />businesses for inquiries, <br />
            support, or <br />
            engaging conversations
          </p>
        </div>
        <div class="col-md-6">
          <h3 class="text-center">Seamless Customer Support</h3>
          <p class="text-center">
            Deliver exceptional customer <br />
            service with Antenna. <br />
            Address inquiries, resolve issues, <br />
            and offer support in real-time, all within a single, <br />
            intuitive interface.
          </p>
        </div>
        <div class="col-md-6 mt-3">
          <h3 class="text-center">Cultivate Growth</h3>
          <p class="text-center">
            Expand your customer base, <br />
            increase brand loyalty, <br />
            and seize opportunities for expansion <br />
            through Antenna's comprehensive features.
          </p>
        </div>
      </div>

      <div>
        <img
          src="@/assets/img/why-gourde-img.png"
          alt=""
          style="width: 350px"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
h3 {
  font-weight: bolder;
  color: rgb(49, 49, 49);
}

p {
  color: rgb(140, 140, 140);
}
</style>
