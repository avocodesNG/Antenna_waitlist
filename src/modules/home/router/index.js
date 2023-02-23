const Home = () => import("@/modules/home/views/indexView.vue");

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
];

export default routes;
