<template>
<div class="Kalkulator">
    <h1>Kalkulator stranica</h1>
    <br>
<b-dropdown id="dropdown-1" text="Odaberite parking" class="m-md-2">
    <b-dropdown-item>Parking Rojc</b-dropdown-item>
    <b-dropdown-item>Parking Titov Park</b-dropdown-item>
    <b-dropdown-item>Parking Tržnica</b-dropdown-item>
    <b-dropdown-item>Parking Dobrićeva</b-dropdown-item>
    <b-dropdown-divider></b-dropdown-divider>
    <!-- Disabled dio - u smislu parkinga koji je zatvoren ili pun?? -->
    <b-dropdown-item disabled>Parking Drosina</b-dropdown-item>
  </b-dropdown>
  <br>
  <hr>
  <b-dropdown id="dropdown-1" text="Odaberite vrijeme" class="m-md-2">
    <b-dropdown-item>1 sat</b-dropdown-item>
    <b-dropdown-item>2 sata</b-dropdown-item>
    <b-dropdown-item>3 sata</b-dropdown-item>
    <b-dropdown-item>4 sata</b-dropdown-item>
    <b-dropdown-item>5 sati</b-dropdown-item>
    <b-dropdown-item>Dnevna</b-dropdown-item>
  </b-dropdown>
</div>   
</template>

<script>
export default {
    name: "Kalkulator",
};
</script>

<style>

.Kalkulator {
    background-color: yellow;
}
.proba {
    color: black;
    font-weight: bold;
}

.mimi{
    color: black;
}
</style>