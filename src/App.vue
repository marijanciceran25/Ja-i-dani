<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>

import store from '@/store';
import {firebase} from '@/firebase';
// import router from '@/router';


firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    //Korisnik je ulogiran.
    console.log("***", user.email);
    store.currentUser = user.email;
  } 
  else {
    //Korisnik nije ulogiran.
    /* console.log('*** No user');
    store.currentUser = null;

     if (router.name !== "Sign_in") {
      router.push({name: 'Sign_in'});
    }
    else if(router.name == "Sign_up")
    {
      router.push({name: 'Sign_up'});
    } */
  }
});

export default {
  name: "App.vue",
  data(){
    return{
      store,
    };
  },
  components: {
  },

methods: {
    loginAlertU(){
            alert("Welcome:  " + store.currentUser)
        },
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
