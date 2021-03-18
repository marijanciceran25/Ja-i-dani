<template>
   
        <div class="form_group">
            <div class="row">
                <div class="col">
            <b-card>
            <h3>Sign Up</h3>

            <div class="form-group">
                <label>Email</label>
                <input 
                    type="email"
                    class="form-control"
                    id="exampleInputEmail"
                    aria-describedby="emailHelp" 
                    placeholder="Email"/>
            </div>
            <br>
           
            <div class="form-group">
                <label for="exampleInputPassword1">Lozinka</label>
                <input type="password" class="form-control" placeholder="Lozinka" />
            </div>
            <br>

            <div class="form-group2">
                <label for="exampleInputPassword2">Ponovite lozinku</label>
                <input type="password" class="form-control" placeholder="Ponovite lozinku"/>
            </div>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            
            

            <button class="btn btn-primary btn-block">Sign Up</button>
            </b-card>
                </div>
            </div>
        </div>
    
</template>

<script>
export default {
    name: 'Sign_in'
}
</script>


<style>
.form_group {
    padding-left: 30%;
    padding-right: 30%;
    border: none;
    background-color:rgb(63, 60, 60);
    height: 600px;
}

div.card-body {
    background-color: #044ca4;
    color: aliceblue;
    height: 600px;
    border-radius: 10px;
    
  
    
}
.form_group2 {
    padding-bottom: 20%;
}
div.card {
    border-radius: 10px;
}

</style>