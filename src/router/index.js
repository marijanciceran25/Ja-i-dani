import Vue from "vue";
import VueRouter from "vue-router";
import Dobrodoslica from "../views/Dobrodoslica.vue";
import Navbar from "../components/Navbar.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Dobrodoslica",
    component: Dobrodoslica
  },
  {
    path: "/about",
    name: "About"
  },
  {
    path: "/navbar",
    name: "Navbar",
    component: Navbar
  },
  {
    path: "/pocetna",
    name: "Pocetna"
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
