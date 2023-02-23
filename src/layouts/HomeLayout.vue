<template>
  <div>
    <div>
      <AppHeader />
      <slot />
      <AppFooter />
    </div>
  </div>
</template>

<script>
import AppFooter from "@/components/navigation/AppFooter.vue";
import AppHeader from "@/components/navigation/AppHeader.vue";

export default {
  components: { AppHeader, AppFooter },
  name: "HomeLayout",
  data() {
    return {};
  },
};
</script>
