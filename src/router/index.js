import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Rojc from "@/views/Rojc.vue";
import Karolina from "@/views/Karolina.vue";
import Trznica from "@/views/Trznica.vue";
import Dobriceva from "@/views/Dobriceva.vue";
import Drosina from "@/views/Drosina.vue";
import Karta from "@/views/Karta.vue";
import Kalkulator from "@/views/Kalkulator.vue";
import Obavijesti from "@/views/Obavijesti.vue";

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
    path: "/karolina",
    name: "Karolina",
    component: Karolina
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
    path: "/karta",
    name: "MKarta",
    component: Karta
  },  
  {
    path: "/kalkulator",
    name: "Kalkulator",
    component: Kalkulator
  },  
  {
    path: "/obavijesti",
    name: "Obavijesti",
    component: Obavijesti
  },  
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
