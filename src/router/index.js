import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Rojc from "@/views/Rojc.vue";
import Karolina from "@/views/Karolina.vue";
import Trznica from "@/views/Trznica.vue";
import Dobriceva from "@/views/Dobriceva.vue";
import Bolnica from "@/views/Bolnica.vue";
import Karta from "@/views/Karta.vue";
import Kalkulator from "@/views/Kalkulator.vue";
import Obavijesti from "@/views/Obavijesti.vue";
import Sign_up from "@/views/Sign_up.vue";
import Sign_in from "@/views/Sign_in.vue";
import Moj_Profil from "@/views/Mojprofil.vue";
import store from "@/store";
Vue.use(VueRouter);


const routes = [
  {
    path: "/home",
    name: "Home",
    component: Home,
    meta: {
      needsUser: true
    }
  },

  {
    path: "/rojc",
    name: "Rojc",
    component: Rojc,
    meta: {
      needsUser: true
    }
  },
  {
    path: "/karolina",
    name: "Karolina",
    component: Karolina,
    meta: {
      needsUser: true
    }
  }, 
  {
    path: "/trznica",
    name: "Trznica",
    component: Trznica,
    meta: {
      needsUser: true
    }
  },
  {
    path: "/dobriceva",
    name: "Dobriceva",
    component: Dobriceva,
    meta: {
      needsUser: true
    }
  },  
  {
    path: "/bolnica",
    name: "Bolnica",
    component: Bolnica,
    meta: {
      needsUser: true
    }
  },  
  {
    path: "/karta",
    name: "Karta",
    component: Karta,
    meta: {
      needsUser: true
    }
  },  
  {
    path: "/kalkulator",
    name: "Kalkulator",
    component: Kalkulator,
    meta: {
      needsUser: true
    }
  },  
  {
    path: "/obavijesti",
    name: "Obavijesti",
    component: Obavijesti,
    meta: {
      needsUser: true
    }
  },  
  {
    path: "/sign_up",
    name: "Sign_up",
    component: Sign_up
  },
  {
    path: "/",
    name: "Sign_in",
    component: Sign_in
  },
  {
    path: "/moj_profil",
    name: "Moj_profil",
    component: Moj_Profil,
    meta: {
      needsUser: true
    }
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  console.log("Stara ruta", from.name, "Nova ruta", to.name, "korisnik", store.currentUser)

  next();
});

export default router;
