const Home = () => import("@/modules/home/views/indexView.vue");
const PrivacyPolicy = () => import("@/modules/home/views/privacyPolicy");
const PressKit = () => import("@/modules/home/views/pressKit");

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
    meta: {
      layout: "HomeLayout",
      parent: "home",
    },
  },

  {
    path: "/press-kit",
    name: "home",
    component: PressKit,
    meta: {
      layout: "HomeLayout",
      parent: "home",
    },
  },

  {
    path: "/privacy-policy",
    name: "home",
    component: PrivacyPolicy,
    meta: {
      layout: "HomeLayout",
      parent: "home",
    },
  },
];

export default routes;
