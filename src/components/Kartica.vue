<template>
    <div>
    <center>
 <b-card
    title="Parking Karolina"
    img-alt="Image"
    img-top
    :img-src="info"
    tag="article"
    style="max-width: 40rem"
    class="mb-2"
  >
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
}
</style>


      