const Home = () => import("@/modules/home/views/indexView.vue");
const PrivacyPolicy = () => import("@/modules/home/views/privacyPolicy");
const PressKit = () => import("@/modules/home/views/pressKit");
const WaitList = () => import("@/modules/home/views/waitList");
const ContactUs = () => import("@/modules/home/views/contactUs");
const TermsOfUse = () => import("@/modules/home/views/termsOfUse");

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
    path: "/join-waitlist",
    name: "waitlist",
    component: WaitList,
    meta: {
      layout: "HomeLayout",
      parent: "home",
    },
  },

  {
    path: "/contact-us",
    name: "contact-us",
    component: ContactUs,
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

  {
    path: "/terms-of-use",
    name: "home",
    component: TermsOfUse,
    meta: {
      layout: "HomeLayout",
      parent: "home",
    },
  },
];

export default routes;
