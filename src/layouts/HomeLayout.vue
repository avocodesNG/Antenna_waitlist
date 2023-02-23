<template>
  <div>
    <div>
      <AppHeader />
      <slot />
    </div>
  </div>
</template>

<script>
import AppHeader from "@/components/navigation/AppHeader.vue";

export default {
  components: { AppHeader },
  name: "HomeLayout",
  data() {
    return {};
  },
};
</script>
