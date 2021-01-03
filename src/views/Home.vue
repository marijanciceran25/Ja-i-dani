<template>

 <b-container class="bv-example-row" fluid="md">
    <b-row>
    <b-col>
    <Kartica v-for="kartica in kartice" :key="kartica" :info="kartica">
    </Kartica>
    </b-col>
    </b-row>
</b-container>
</template>

<script>
let kartice = []

kartice = [
  { 
  url: '@/assets/Tržnica.jpg',
  naslov: 'Parking Rojc',
  router: '/rojc'
  },
  {url: 'https://storage.glasistre.hr/MediaServer/Photos/Download/90513?Format=1',
  naslov: 'Parking Titov Park',
  router: '/about'
  },
  {url: 'https://www.maris.hr/site_media/media/realestate/watermarked/Veruda_igralisteimmobilien_in_croatia1-4.jpg.1280x800_q92.jpg',
  naslov: 'Parking Tržnica',
  },
  {url: 'https://lh3.googleusercontent.com/proxy/qlyvbauUem6tJFeIHIsqI1hacWzIGd6EiCRiBujaktx_WOY8PYBDvQV560cW3EjbvorTrTIKhzy-PpWe3soWJnZ5gzBbzlWfLUm83Jrvt3cpB83GPflxRaLt7xGbPZlY9MbmNC6r_HTga1lCMQW-p40YRvsYTME',
  naslov: 'Parking Dobrićeva',
  },
  {url: 'https://storage.glasistre.hr/MediaServer/Photos/Download/196799?Format=1',
  naslov: 'Parking Drosina'
  }
]

import Kartica from '@/components/Kartica.vue';

export default {
    name: "Home",
    components: {
        "Kartica": Kartica,
    },
        data: function() {
        return {
        kartice: kartice
        };
    },
};
</script>

<style>


</style>