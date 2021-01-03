<template>
    <div>
    <center> 
 <router-link :to="{path: info.router}">     
 <b-card
    img-alt="Image"
    img-top
    :img-src="info.url"
    tag="article"
    style="max-width: 40rem"
    class="mb-2"
  >
  <b-card-title>{{info.naslov}}</b-card-title>
 </b-card>
 </router-link>
 
  </center>
</div>
</template>
<script>

export default {
  props: ["info"],
   name: "Kartica",
};

</script>

<style scoped>
.mb-2, .my-2 {
    margin-bottom: 2.5rem !important;
    margin-left: 1rem;
    margin-right: 1rem;
    margin-top: 1rem !important;
}
.mb-2 {
 border-bottom-left-radius: 25px;
 border-bottom-right-radius: 25px;
 background-color: #044ca4;
 color: white;
  -webkit-text-stroke-width: 0.15px;
-webkit-text-stroke-color: #000;
}

</style>


      