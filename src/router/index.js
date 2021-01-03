import Vue from "vue";
import VueRouter from "vue-router";
import Rojc from "@/views/Rojc.vue";
import Home from "../views/Home.vue";


Vue.use(VueRouter);

const routes = [
 
  {
    path: "/about",
    name: "About",
    component: () =>
    import("../views/About.vue")
  },
 
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path:"/rojc",
    name: "Rojc",
    component: Rojc
  }
  
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
