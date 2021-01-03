<template>
  <div id="app">
    
    <div class="upperapp"> 
  <Dobrodoslica></Dobrodoslica>
  <Navbar></Navbar>
  </div>
  <router-view/>
  <Footer></Footer>
  
  </div>
</template>

<script>

import Dobrodoslica from './views/Dobrodoslica.vue';
import Footer from './components/Footer.vue';
import Navbar from '@/components/Navbar.vue';



export default {
   name: "App.vue",
   components: {
      
      Dobrodoslica,
      Footer,
      Navbar,
   },

};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  background-image: linear-gradient(to bottom, #020024, #00114a, #001873, #001c9d, #001ac7, #001ac7, #001ac7, #001ac7, #001c9d, #001873, #00114a, #020024);
}



.upperapp
{
  background-image: url("https://wallpapercave.com/wp/wp3006038.png") !important;
}
</style>
