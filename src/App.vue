<template>
  <div id="app">
    <div class="upperapp"> 
      <Navbar></Navbar>
    </div>
    <router-view/>
    <Footer></Footer>
  </div>
</template>

<script>

import Footer from './components/Footer.vue';
import Navbar from '@/components/Navbar.vue';

export default {
  name: "App.vue",
  components: {
    Footer,
    Navbar
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

.upperapp
{
  background-color: #044ca4;
}
</style>
