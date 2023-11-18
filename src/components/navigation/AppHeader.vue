<template>
  <div class="app-header-container sticky-top bg-white">
    <div class="container">
      <div class="app-header">
        <router-link to="/">
          <!-- <img src="@/assets/img/logo-spread.svg" alt="" /> -->
          Logo here
        </router-link>
        <div class="d-flex align-items-center" style="gap: 30px">
          <div class="join-waitlist">
            <!-- <router-link to="/join-waitlist"> -->

            <a href="https://forms.fillout.com/t/uqCTGJDXGxus">
              <button
                class="primary-btn d-flex align-items-center"
                style="gap: 3px"
              >
                <span>{{ $t("btn-text") }}</span>
                <span>
                  <i-icon icon="ic:round-arrow-outward" width="13px" />
                </span>
              </button>
            </a>

            <!-- </router-link> -->
          </div>
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
