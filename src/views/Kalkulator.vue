<template>
  <div class="kalkulator">
<center>
<h1>Kalkulator</h1>
<br>
<h3>Ovo je kalkulator za izračun cijene boravka na određenom parkingu ovisno o vremenu provedenom</h3>
<br><br>
<b><p>Parking:</p></b>
<select name="parking" id="parking" @change="calcVals">
  <option value="">Odaberite parking</option>
  <option value="4">Parking Rojc</option>
  <option value="6">Parking Karolina</option>
  <option value="5">Parking Tržnica</option>
  <option value="6">Parking Drosina</option>
  <option value="7">Parking Titov</option>
</select>

<br>
<br>
<b><p>Vrijeme:</p></b>
<select name="vrijeme" id="vrijeme" @change="calcVals">
  <option value="">Odaberite vrijeme</option>
  <option value="1">1 sat</option>
  <option value="2">2 sata</option>
  <option value="3">3 sata</option>
  <option value="4">4 sata</option>
  <option value="5">5 sati</option>
  <option id="dnevna" value="40">Dnevna</option>
</select>

<br><br>
<b><p>Cijena:</p></b>
<textarea id="totalAmount" name="totalAmount" rows="2" cols="20" readonly></textarea>

<br><br>
  <hr>
<br><br>

<h3>Ovo je kalkulator za izračun cijene boravka na određenom parkingu ako ostajete dulje od jednoga dana</h3>
<br>

  <b><label for="kolicina">Unesite broj dana (između 2 i 365):</label></b>
  <br><br>
  <input type="number" id="kolicina" name="kolicina" min="2" max="365">
  <button @click="visedana()">Potvrdi</button> 

<br>
<b><p>Cijena:</p></b>
<textarea id="result" name="result" rows="2" cols="20" readonly></textarea>

</center>
  </div>
</template>

<script>
export default {
  
}
</script>
<style>

.kalkulator {
  color: white;
  padding-top: 10px;
}
</style>