<template>
  <div class="app-header-container sticky-top bg-white">
    <div class="container">
      <div class="app-header">
        <img src="@/assets/img/logo-spread.svg" alt="" />
        <div class="d-flex align-items-center" style="gap: 30px">
          <el-dropdown trigger="click">
            <span
              class="el-dropdown-link d-flex align-items-center"
              style="gap: 3px"
            >
              <country-flag :country="selected_flag" size="small" />
              <span>{{
                $t("selected_language", { language: selected_language })
              }}</span>
              <i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item
                class="text-capitalize drop-item"
                v-for="(lang, i) in languageArray"
                :key="`lang${i}`"
                :value="lang"
              >
                <!-- <span> {{ lang + "," + selected }}</span> -->
                <span
                  :role="lang === selected ? '' : 'button'"
                  :class="{ active: lang === selected }"
                  @click="changeLang(lang)"
                  >{{ $t(lang) }}</span
                >
              </el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>

          <div class="join-waitlist">
            <button
              class="primary-btn d-flex align-items-center"
              style="gap: 3px"
            >
              <span>{{ $t("btn-text") }}</span>
              <span>
                <i-icon icon="ic:round-arrow-outward" width="13px" />
              </span>
            </button>
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
