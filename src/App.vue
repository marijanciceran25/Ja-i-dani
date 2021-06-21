<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import { firebase } from "@/firebase";
import router from "@/router";
import store from "@/store";
import { db } from "@/firebase";

firebase.auth().onAuthStateChanged(function(user) {
  const currentRoute = router.currentRoute;
  console.log("Trenutna ruta", currentRoute);

  if (user) {
    store.currentUser = user.email;
    //console.log(user);

    db.collection("korisnici")
      .doc(user.email)
      .get()
      .then((doc) => {
        if (doc.exists) {
          //console.log("Document data:", doc.data());
        } else {
          // doc.data() will be undefined in this case
          console.log("No such document!");
        }
      });

    // User is signed in.
  } else {
    // No user is signed in.
    store.currentUser = null;
  }
});

export default {
  name: "App.vue",
  data() {
    return {
      store,
    };
  },
};
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