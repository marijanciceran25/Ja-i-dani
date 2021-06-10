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
    <div class="account-details">{{email}}</div>
    </center>
    </b-card>
    <Footer></Footer>   
</div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';
import {firebase} from '@/firebase';
import store from '../store';

export default {
    name: "Moj_profil",
    data(){
        return{
            username: null,
            email: null,
            store
        }
},
    components: {
        Navbar,
        Footer     
    },

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