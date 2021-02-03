<template>
    <b-container class="bv-example-row" fluid="md">
        <b-col>
            <Kartica v-for="kartica in kartice" :key="kartica" :info="kartica"></Kartica>
        </b-col>
    </b-container>
</template>

<script>
let kartice = []

kartice = [
  { 
  url: 'https://storage.glasistre.hr/MediaServer/Photos/Download/81904?Format=1',
  naslov: 'Parking Rojc',
  router: '/rojc'
  },
  {url: 'https://storage.glasistre.hr/MediaServer/Photos/Download/90513?Format=1',
  naslov: 'Parking Karolina',
  router: '/karolina'
  },
  {url: 'https://www.maris.hr/site_media/media/realestate/watermarked/Veruda_igralisteimmobilien_in_croatia1-4.jpg.1280x800_q92.jpg',
  naslov: 'Parking Tržnica',
  router: '/trznica'
  },
  {url: 'https://cdn.discordapp.com/attachments/465282681622757399/806587488574505000/unknown.png',
  naslov: 'Parking Dobrićeva',
  router: '/dobriceva'
  },
  {url: 'https://storage.glasistre.hr/MediaServer/Photos/Download/196799?Format=1',
  naslov: 'Parking Drosina',
  router: '/drosina'
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