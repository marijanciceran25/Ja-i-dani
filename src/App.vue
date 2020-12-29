<template>
  
  <div id="app">
    <router-view />
    <div>
  <div> 
  <b-navbar toggleable="lg" type="dark" class="stil">
    <b-navbar-brand href="#">Park Finder</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item href="#">Mapa</b-nav-item>
        <b-nav-item-dropdown text="Lista Parkinga">
          <b-dropdown-item href="#">Rojc</b-dropdown-item>
          <b-dropdown-item href="#">Karolina</b-dropdown-item>
          <b-dropdown-item href="#">Titov Park</b-dropdown-item>
        </b-nav-item-dropdown>
        <b-nav-item href="#">Kalkus</b-nav-item>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-form>
         <!-- Search form -->
          <input class="form-control" type="text" placeholder="Search" aria-label="Search">
        </b-nav-form>

        <b-nav-item-dropdown text="Jezik" right>
          <b-dropdown-item href="#">HRV</b-dropdown-item>
          <b-dropdown-item href="#">ENG</b-dropdown-item>
          <b-dropdown-item href="#">ITA</b-dropdown-item>
        </b-nav-item-dropdown>

      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>
  </div>
  <b-container class="bv-example-row" fluid="md">
    <b-row>
    <b-col>
    <Kartica v-for="kartica in kartice" :key="kartica" :info="kartica">
    </Kartica>
    </b-col>
  
    </b-row>
</b-container>
  
  </div>
</template>

<script>
let kartice = []

kartice = [
  {url: 'https://storage.glasistre.hr/MediaServer/Photos/Download/90513?Format=1',
  naslov: 'Parking Titov Park'},
  {url: 'https://www.pulacroatia.net/wp-content/uploads/2015/07/Culture-center-Rojc-Pula-1.jpg',
  naslov: 'Parking Rojc'},
  {url: 'https://www.maris.hr/site_media/media/realestate/watermarked/Veruda_igralisteimmobilien_in_croatia1-4.jpg.1280x800_q92.jpg',
  naslov: 'Parking Tržnica'}

]

import Kartica from './components/Kartica.vue';

export default {
   name: "App.vue",
   components: {
      "Kartica": Kartica,
   },
    data: function() {
     return {
       kartice: kartice,
     };
   },

};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  background-image: url("https://wallpapercave.com/wp/wp3006038.png");
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.stil{
  background-color:#044ca4 !important;
}


</style>
