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
      Navbar
   },

};
</script>

<style>
#app {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
}

.upperapp
{
  background-image: url("https://wallpapercave.com/wp/wp3006038.png") !important;
}
</style>
