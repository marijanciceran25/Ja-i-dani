<template>
  <div id="app">
    <div class="upperapp"> 
  <Dobrodoslica>jeah</Dobrodoslica>
  <b-navbar toggleable="lg" type="dark" class="stil">
    <b-navbar-brand href="@/views/App.vue">Park Finder</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item href="#">Mapa</b-nav-item>
        <b-nav-item-dropdown text="Lista Parkinga">
          <b-dropdown-item href="#">Rojc</b-dropdown-item>
          <b-dropdown-item href="#">Titov Park</b-dropdown-item>
          <b-dropdown-item href="#">Tržnica</b-dropdown-item>
          <b-dropdown-item href="#">Dobrićeva</b-dropdown-item>
          <b-dropdown-item href="#">Drosina</b-dropdown-item>
        </b-nav-item-dropdown>
        <b-nav-item href="#">Kalkulator</b-nav-item>
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
  <b-container class="bv-example-row" fluid="md">
    <b-row>
    <b-col>
    <Kartica v-for="kartica in kartice" :key="kartica" :info="kartica">
    </Kartica>
    </b-col>
  
    </b-row>
</b-container>
  <Footer></Footer>
  </div>
</template>

<script>
let kartice = []

kartice = [
  {url: 'https://lh3.googleusercontent.com/proxy/1UAUIEBeOPwDDTWof8k4bngrXgiV6dYUtU7Mawcr1GiJFu8HO_u__sWQCWv8Evyehhr4U666ZPl8_z2MdT3WYun2GNWD9q6wXWGzLtjLm2cp2zFPkGgdmXJNMg',
  naslov: 'Parking Rojc'},
  {url: 'https://storage.glasistre.hr/MediaServer/Photos/Download/90513?Format=1',
  naslov: 'Parking Titov Park'},
  {url: 'https://www.maris.hr/site_media/media/realestate/watermarked/Veruda_igralisteimmobilien_in_croatia1-4.jpg.1280x800_q92.jpg',
  naslov: 'Parking Tržnica'},
  {url: 'https://lh3.googleusercontent.com/proxy/wZiQ3uc6GimBKdIXW8la0q3eWkWMnvdmA0oAONqiHepjSgQ-V1PkXRG2lrkafclhDp0D5jxHkqHHlv7av4IgbfyOnEQCxyx7L_3W6fWTNNP9w5lSrOEP4z6_ZgRkzuwsZus3qG73Oo3P34zc1air68vBACR8FbdN7KM_',
  naslov: 'Parking Dobrićeva'},
  {url: 'https://storage.glasistre.hr/MediaServer/Photos/Download/196799?Format=1',
  naslov: 'Parking Drosina'}
]

import Kartica from './components/Kartica.vue';
import Dobrodoslica from './views/Dobrodoslica.vue';
import Footer from './components/Footer.vue';

export default {
   name: "App.vue",
   components: {
      "Kartica": Kartica,
      "Dobrodoslica": Dobrodoslica,
      Footer
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
  background-image: linear-gradient(to bottom, #020024, #00114a, #001873, #001c9d, #001ac7, #001ac7, #001ac7, #001ac7, #001c9d, #001873, #00114a, #020024);
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

.upperapp
{
  background-image: url("https://wallpapercave.com/wp/wp3006038.png");
}
</style>
