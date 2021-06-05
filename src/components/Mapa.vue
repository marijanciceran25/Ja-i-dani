<template>
   <div>
            <div>
                <h1>Vaše koordinate:</h1>
                <p>{{ coordinates.lat.toFixed(4) }} Latitude, {{ coordinates.lng.toFixed(4) }} Longitude</p>
                <br>
            </div>

    <button @click="drawMarkers">Prikaži lokacije </button>
    <button @click="clearMap">Očisti mapu</button>
    
    <GmapMap
        :center="center"
        :zoom="14"
        :options="mapStyle"
        ref="map"
        map-type-id="terrain"
        style="width: 1200px; height: 600px"
    >

  <gmap-info-window 
        @closeclick="window_open=false" 
        :opened="window_open" 
        :position="infowindow"
        :options="{
          pixelOffset: {
            width: 0,
            height: -35
          }
        }"
    >
    Ja sam infowindow
  </gmap-info-window>

    <GmapMarker
        :v-if="mapLoaded"
        :key="index"
        v-for="(m, index) in markers"
        :position="m.position"
        :clickable="true"
        :label="m.label"
        @click="openWindow"
        />

    </GmapMap>
  </div>
</template>

<script>

const parkpula = { lat: 44.870299, lng: 13.854490 };
const rojc = { lat: 44.86246641035136, lng: 13.844118917952022 };
const karolina = { lat: 44.87295713977241, lng: 13.84845695338057 };
const bolnica = { lat: 44.86615748628019, lng: 13.859112325863487 };
const trznica = { lat: 44.866989166250576, lng: 13.8506079377271};
const dobriceva = { lat: 44.870609744174544, lng: 13.849421135612475 };


export default {
    name: "Mapa",
    data(){
        return {
            coordinates: {
              lat: 0,
              lng: 0 
            },
            markers: [],
            center: parkpula,
            infowindow: rojc,
            window_open: false,
          };
    },

    methods: {

        openWindow () {
            this.window_open = true
        },

        drawMarkers(){
          this.markers =  [
              {
                position: parkpula,
                label: "Parking Pula",
              },
               {
                position: rojc,
                label: "Rojc",
              },
              {
                position: karolina,
                label: "Karolina",    
              },
              {
                position: bolnica,
                label: "Bolnica"
              },
               {
                position: trznica,
                label: "Trznica"
              },
               {
                position: dobriceva,
                label: "Dobriceva"    
              },
          ];
        },
        clearMap(){ 
          this.markers = []
        },
    }
};
</script>

<style scoped>
</style>

