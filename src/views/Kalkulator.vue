<template>
  <div class="kalkulator">
    <b-form-select v-model="selected" :options="options"></b-form-select>
    <br>
    <br>
    <b-form-select v-model="izabrano" :options="opcije"></b-form-select>

    <div class="mt-3"> <strong>{{ selected }}</strong></div>
    <div class="mt-3"> <strong>{{ izabrano }}</strong></div>
  </div>
</template>



<script>
export default {
    name: "Kalkulator",
     data() {
      return {
        selected: null,
        options: [
          { value: null, text: 'Odaberite parking' },
          { value: 'Cijena po satu 6kn', text: 'Parking Rojc' },
          { value: 'Cijena po satu 5kn', text: 'Parking Tržnica' },
          { value: 'Cijena po satu 5kn', text: 'Parking Tržnica' },
          { value: 'Cijena po satu 5kn', text: 'Parking City max (popunjen)', disabled: true }
        ],
        izabrano: null,
        opcije: [
          { value: null, text: 'Odaberite parking' },
          { value: 'Cijena po satu 6kn', text: '1 sat' },
          { value: 'Cijena po satu 5kn', text: '2 sata' },
          { value: 'Cijena po satu 5kn', text: '3 sata' },
          { value: 'Cijena po satu 5kn', text: '4 sata'},
          { value: 'Cijena po satu 5kn', text: '5 sati' },
          { value: 'Cijena po satu 5kn', text: 'dnevna karta' }
        ],
      }
    }
};
</script>

<style>

.kalkulator {
    
}
.proba {
    color: black;
    font-weight: bold;
}

.mimi{
    color: black;
}
.mt-3 {
    text-align: center;
    padding-right: 14%;
    color: aliceblue;
}
.custom-select {
    width: 20% !important;
    
}
</style>