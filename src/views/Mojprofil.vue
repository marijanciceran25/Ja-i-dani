<template>
<div class="Mapa">
    <Navbar></Navbar>
    <b-card>
    <br>
    <br>
    <br>
    <br>
    <center>
    <h2>Informacije o profilu</h2>
    <br>
    <br>
    </center>
    </b-card>
    <Footer></Footer>   
</div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';
import { firebase } from '@/firebase';
import { db } from '@/firebase';
import store from '../store';

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    // ...
  } else {
    // User is signed out
    // ...
  }
});


export default {
    name: "Moj_profil",
    data(){
        return {
            Korisnik: {},
            username: null,
            email: null,
            password: null,
            store
        }
},
    components: {
        Navbar,
        Footer,    
    },

    mounted() {
        this.getPodaci();
    },

    methods: {
getPodaci(){
  
    db.collection("korisnici")
    .get()
    .then((query) => {
        query.forEach((doc) => {
            console.log('ID:', doc.id);
            console.log('Podaci: ', doc.id);
        });
       }); 
    }},
    created(){
        var user = firebase.auth().currentUser;
        this.email = user.email;
    } 

};
</script>
<style>

.user-role{
    color:black;
}
div.card{
    background-color: #ffffff;
    color: black;
    border-radius: 10px;
    max-width:1000%;
    height: 700px;
}
</style>