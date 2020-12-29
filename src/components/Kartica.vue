<template>
    <div>
    <center>
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
    margin-left: 3rem;
    margin-right: 3rem;
}
.mb-2 {
 border-bottom-left-radius: 25px;
 border-bottom-right-radius: 25px;
 background-color: #044ca4;
 color: black;
  
}

</style>


      