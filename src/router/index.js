import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Rojc from "@/views/Rojc.vue";
import Titov from "@/views/Titov.vue";
import Trznica from "@/views/Trznica.vue";
import Dobriceva from "@/views/Dobriceva.vue";
import Drosina from "@/views/Drosina.vue";
import Mapa from "@/views/Mapa.vue";
import Kalkulator from "@/views/Kalkulator.vue";


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
    path: "/rojc",
    name: "Rojc",
    component: Rojc
  },
  {
    path: "/titov",
    name: "Titov",
    component: Titov
  }, 
  {
    path: "/trznica",
    name: "Trznica",
    component: Trznica
  },
  {
    path: "/dobriceva",
    name: "Dobriceva",
    component: Dobriceva
  },  
  {
    path: "/drosina",
    name: "Drosina",
    component: Drosina
  },  
  {
    path: "/mapa",
    name: "Mapa",
    component: Mapa
  },  
  {
    path: "/kalkulator",
    name: "Kalkulator",
    component: Kalkulator
  },  
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
