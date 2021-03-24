import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import Vuelidate from 'vuelidate';
import VueAnimated from '@codekraft-studio/vue-animated'

Vue.use(VueAnimated)

import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
export const changeRoute = new Vue();
Vue.use(router)
Vue.use(Vuelidate);


Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");