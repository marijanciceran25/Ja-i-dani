<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>

import store from '@/store';
import {firebase} from '@/firebase';
import router from '@/router';


firebase.auth().onAuthStateChanged((user) => {
  const currentRoute = router.currentRoute;
  if (user) {
    //Korisnik je ulogiran.
    console.log("***", user.email);
    store.currentUser = user.email;
  } 
  else {
    //Korisnik nije ulogiran.
    console.log('*** No user');
    store.currentUser = null;

     if (currentRoute.meta.needsUser) {
      router.push({name: 'Sign_in'});
    }
  }
});

export default {
  name: "App.vue",
  data(){
    return{
      store,
    };
  },
}

</script>

<style>
#app {
  width: 100%;
  height: 100%;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
}
</style>
