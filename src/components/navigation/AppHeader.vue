<template>
  <!-- <div class="app-header-container sticky-top bg-primary">
    <div class="container-fluid">
      <div class="container-fluid">
        <div class="d-flex justify-content-between">
          <router-link to="/">
          
            <img
              src="@/assets/img/logoAntenna.png"
              alt=""
              class="text-primary img"
            />
          </router-link>

          <a
            href="https://forms.fillout.com/t/uqCTGJDXGxus"
            class="btn btn-light"
            >ght</a
          >
        </div>
      </div>
    </div>
  </div> -->
  <div class="container-fluid sticky-top">
    <div class="">
      <div class="d-flex justify-content-between">
        <div>
          <router-link to="/">
            <img
              src="@/assets/img/logoAntenna.png"
              alt=""
              class="text-primary img"
            />
          </router-link>
        </div>

        <div>
          <a
            href="https://forms.fillout.com/t/uqCTGJDXGxus"
            class="btn btn-light text-primary"
            >Join us now</a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import i18n, { languages } from "@/plugins/i18n";
export default {
  name: "AppHeader",
  data() {
    return {
      flag: "US",
      languageArray: languages,
      languagesMap: {
        creole: "creole",
        english: "english",
        french: "french",
        spanish: "spanish",
      },
      shortCodes: {
        english: "US",
        french: "FR",
        creole: "HT",
        spanish: "ES",
      },
    };
  },
  methods: {
    changeLang(value) {
      this.$store.dispatch("home/changeLocale", value);
    },
  },
  computed: {
    lang: {
      get: function () {
        return this.$store.state.home.locale;
      },
      set: function (newLocale) {
        this.$store.dispatch("home/changeLocale", newLocale);
      },
    },
    selected_language() {
      return this.$t(this.languagesMap[this.lang]);
    },
    selected() {
      return this.lang;
    },
    selected_flag() {
      return this.shortCodes[this.lang];
    },
    // langoptions()
  },
  created() {
    i18n.locale = this.$store.state.home.locale;
  },
};
</script>

<style>
.sticky-top {
  background-color: #00478f;
}

.img {
  padding: 0% !important;
  margin-bottom: 5%;
  margin-left: 22% !important;
}

.btn {
  margin-top: 15%;
  margin-right: 8rem !important;
}
</style>
