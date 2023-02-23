<template>
  <div>
    <AppLayout>
      <router-view />
    </AppLayout>

    <!-- Success and Error Alerts -->
    <!-- <success-alert/> -->
  </div>
</template>

<script>
import AppLayout from "./layouts/AppLayout.vue";
export default {
  components: { AppLayout },
};
</script>

<style></style>
