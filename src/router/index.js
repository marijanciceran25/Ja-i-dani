import Vue from "vue";
import VueRouter from "vue-router";
import Dobrodoslica from "../views/Dobrodoslica.vue";

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
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
