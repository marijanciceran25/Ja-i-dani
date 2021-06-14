<template>
<center>
<div class="bgkalkus">
  <Navbar></Navbar>
  <br>
  <br>
  <br>
  <br>
  <h2><b>Kalkulator</b></h2>
  <br>
  <center>
    <div class="top">
      <h4 style="padding-top:10px">Odaberite jedan od parkinga</h4>
      <p>*Napomena: zadržavanje više od 5 sati na određenom parkingu smatra se dnevnom kartom čija je cijena ista za svaki parking</p>
      <p style="padding:10px">Ljetna dnevna karta: <b>50Kn</b> <br> Zimska dnevna karta: <b>40Kn</b> </p>
    </div>
    <br>
  </center>
  <br>
  <div class="accordion" role="tablist">
    <b-card no-body class="mb-1">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button block v-b-toggle.accordion-1 variant="info">Parking Rojc</b-button>
      </b-card-header>
      <b-collapse id="accordion-1" accordion="my-accordion" role="tabpanel">
        <b-card-body>
         <b-card-text>Cijena: 8 Kn/h  <br> Radno vrijeme: <br> Pon-Pet: 08:00 - 21:00 <br> Sub: 10:00-21:00 <br> Ned: 11:00-21:00 </b-card-text>
          <b-card-text>Ovdje odaberite vrijeme provedeno na parkingu: </b-card-text>
            <b-form-select v-model="selected" :options="options">
            <template #first>
            <b-form-select-option :value="null" disabled>-- Molimo odaberite jednu od opcija --</b-form-select-option>
            </template>
            </b-form-select>
            <div class="mt-3">Konacna cijena: <strong>{{ selected }}  Kn </strong></div>
        </b-card-body>
      </b-collapse>
    </b-card>

    <b-card no-body class="mb-1">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button block v-b-toggle.accordion-2 variant="info">Parking Karolina</b-button>
      </b-card-header>
      <b-collapse id="accordion-2" accordion="my-accordion" role="tabpanel">
        <b-card-body>
        <b-card-text>Cijena: 10 Kn/h  <br> Radno vrijeme: <br> Pon-Pet: 09:00 - 21:00 <br> Sub: 08:00-22:00 <br> Ned: 10:00-22:00 </b-card-text>
          <b-card-text>Ovdje odaberite vrijeme provedeno na parkingu: </b-card-text>
            <b-form-select v-model="selected2" :options="options2">
            <template #first>
            <b-form-select-option :value="null" disabled>-- Molimo odaberite jednu od opcija --</b-form-select-option>
            </template>
            </b-form-select>
            <div class="mt-3">Konacna cijena: <strong>{{ selected2 }}  Kn </strong></div>
        </b-card-body>
      </b-collapse>
    </b-card>

    <b-card no-body class="mb-1">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button block v-b-toggle.accordion-3 variant="info">Parking Tržnica</b-button>
      </b-card-header>
      <b-collapse id="accordion-3" accordion="my-accordion" role="tabpanel">
        <b-card-body>
         <b-card-text>Cijena: 8 Kn/h  <br> Radno vrijeme: <br> Pon-Pet: 09:00 - 21:00 <br> Sub: 10:00-21:00 <br> Ned: 10:00-20:00 </b-card-text>
          <b-card-text>Ovdje odaberite vrijeme provedeno na parkingu: </b-card-text>
            <b-form-select v-model="selected3" :options="options3">
            <template #first>
            <b-form-select-option :value="null" disabled>-- Molimo odaberite jednu od opcija --</b-form-select-option>
            </template>
            </b-form-select>
            <div class="mt-3">Konacna cijena: <strong>{{ selected3 }}  Kn </strong></div>
        </b-card-body>
      </b-collapse>
    </b-card>

        <b-card no-body class="mb-1">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button block v-b-toggle.accordion-4 variant="info">Parking Dobrićeva ul.</b-button>
      </b-card-header>
      <b-collapse id="accordion-4" accordion="my-accordion" role="tabpanel">
        <b-card-body>
         <b-card-text>Cijena: 9 Kn/h  <br> Radno vrijeme: <br> Pon-Pet: 09:00 - 20:00 <br> Sub: 08:00-20:00 <br> Ned: 10:00-20:00 </b-card-text>
          <b-card-text>Ovdje odaberite vrijeme provedeno na parkingu: </b-card-text>
            <b-form-select v-model="selected4" :options="options4">
            <template #first>
            <b-form-select-option :value="null" disabled>-- Molimo odaberite jednu od opcija --</b-form-select-option>
            </template>
            </b-form-select>
            <div class="mt-3">Konacna cijena: <strong>{{ selected4 }}  Kn </strong></div>
        </b-card-body>
      </b-collapse>
    </b-card>

        <b-card no-body class="mb-1">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button block v-b-toggle.accordion-5 variant="info">Parking Bolnica</b-button>
      </b-card-header>
      <b-collapse id="accordion-5" accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <b-card-text>Cijena: 8 Kn/h  <br> Radno vrijeme: <br> Pon-Pet: 08:00 - 20:00 <br> Sub: 09:00-21:00 <br> Ned: 11:00-21:00 </b-card-text>
          <b-card-text>Ovdje odaberite vrijeme provedeno na parkingu: </b-card-text>
            <b-form-select v-model="selected5" :options="options5">
            <template #first>
            <b-form-select-option :value="null" disabled>-- Molimo odaberite jednu od opcija --</b-form-select-option>
            </template>
            </b-form-select>
            <div class="mt-3">Konacna cijena: <strong>{{ selected5 }}  Kn </strong></div>
        </b-card-body>
      </b-collapse>
    </b-card>

    <hr>
     
        <div class="kalkulator">
           <strong>Ovdje se nalazi kalkulator za izračun cijene boravka ako ostajete dulje od jednoga dana</strong><br><br>
            <label for="quantity">Unesite broj dana:</label>
            <br>
            <input value="form.quantity" type="number" id="quantity" placeholder="Dani" max="365" />
            <button @click='updateQuantity'>Izračunaj</button>
            <br>
            <br>
            <p>Ukupna cijena: <strong> {{form.total}} Kn {{form.quantity}} </strong></p>
        </div>
    </div>

    <Footer></Footer>
</div>
</center>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';

const ljetna=50;


  export default {
    components: {
      Navbar,
      Footer
    },
    data() {
      return {
        form: {
        quantity: null,
        total: null,
      },
        selected: null,
        options: [
          { value: '8', text: '1 sat' },
          { value: '16', text: '2 sata' },
          { value: '24', text: '3 sata' },
          { value: '30', text: '4 sata' },
          { value: '38', text: '5 sati' },
          { value: ljetna, text: 'Dnevna ljetna' },
        ],
        selected2: null,
        options2: [
          { value: '10', text: '1 sat' },
          { value: '20', text: '2 sata' },
          { value: '30', text: '3 sata' },
          { value: '40', text: '4 sata' },
          { value: '50', text: '5 sati' },
          { value: ljetna, text: 'Dnevna ljetna' },
        ],
        selected3: null,
        options3: [
          { value: '8', text: '1 sat' },
          { value: '16', text: '2 sata' },
          { value: '24', text: '3 sata' },
          { value: '30', text: '4 sata' },
          { value: '38', text: '5 sati' },
          { value: ljetna, text: 'Dnevna ljetna' },
        ],
        selected4: null,
        options4: [
          { value: '9', text: '1 sat' },
          { value: '18', text: '2 sata' },
          { value: '27', text: '3 sata' },
          { value: '36', text: '4 sata' },
          { value: '45', text: '5 sati' },
          { value: ljetna, text: 'Dnevna ljetna' },
        ],
        selected5: null,
        options5: [
          { value: '8', text: '1 sat' },
          { value: '16', text: '2 sata' },
          { value: '24', text: '3 sata' },
          { value: '30', text: '4 sata' },
          { value: '38', text: '5 sati' },
          { value: ljetna, text: 'Dnevna ljetna' },
        ]
      }
    },
     methods: {
    updateQuantity: function() {
        var unos=document.getElementById("quantity").value
        if(unos>0) {
          if(unos==1 || unos>365) 
            {alert('Krivi unos, molimo Vas unesite broj između 2 i 365.')}
          else 
            { this.form.total = unos * ljetna}
        }
        else {{alert('Krivi unos, usesen je negativan broj ili 0')}}
  }
}
}
</script>

<style lang="scss">
.bgkalkus{
  background-color: white;
  color: black;
}
.top{
  background-color: #044ca4 !important;
  position: relative;
  overflow: hidden;
  color: white;
  width: 80%;
  padding-top: 15px;
  padding-right: 15px;
  padding-bottom: 15px;
  padding-left: 15px;
  border-radius: 10px;
}

div.card.mb-1 {
  background-color: transparent;
  color: black;
  height: auto;
}

button.btn.btn-info.btn-block.collapsed{
  background-color: #044ca4;
  color: #fff;
  border-color: #044ca4;
}

button.btn.btn-info.btn-block.not-collapsed{
  background-color: #044ca4;
  color: #fff;
  border-color: #044ca4;
}

header.card-header.p-1{
  background-color: transparent;
}

.accordion{
  width:80%;
}
</style>