import Vue from "vue";
import VueRouter from "vue-router";

// Error Routes
import NotFoundComponent from "../modules/errorPages/error-404.vue";

// Module Routes
import HomeRoutes from "@/modules/home/router";

Vue.use(VueRouter);

const routes = [
  // Make sure it's your last route definition
  { path: "*", component: NotFoundComponent },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes: routes.concat(HomeRoutes),
});

export default router;
