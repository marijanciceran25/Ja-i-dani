<template>
  <div class="kalkulator">

    <input :value="form.sale_quantity" @change="updateQuantity" type="number" class="form-control" name="sale_quantity" id="sale_quantity" placeholder="Quantity">
  <input :value="form.sale_rate" @change="updateRate" type="number" step="any" class="form-control" name="sale_rate" id="sale_rate" placeholder="Rate">
  <input v-model="form.sale_total" type="number" step="any" class="form-control" name="sale_total" id="sale_total" placeholder="Total Price">
  <hr>
  <hr>
  <hr>
  <hr>
  <h2 class="kurac">Boze pomozi</h2>

    
  </div>
</template>



<script>

export default {
    name: "Kalkulator",
    data() {
        return {
            
        form: {
        sale_quantity: 0,
        sale_rate: 0,
        sale_total: 0
      }
    }

},
 methods: {
    updateQuantity(event) {
        this.form.sale_quantity = event.target.value
        this.form.sale_total = this.form.sale_quantity * this.form.sale_rate
      },
      updateRate(event) {
        this.form.sale_rate = event.target.value
        this.form.sale_total = this.form.sale_quantity * this.form.sale_rate
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
.kurac {
  color: aliceblue;
}
</style>