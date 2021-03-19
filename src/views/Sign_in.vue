<template>
   
        <div class="form_group">
            <div class="row">
                <div class="col">
            <b-card id="sign">
            <h3>Sign Up</h3>

            <div class="form-group">
                <label for="exampleInputEmail1">Email</label>
                <input 
                    type="email"
                    v-model="username"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp" 
                    placeholder="Email"/>
            </div>
            <br>
           
            <div class="form-group">
                <label for="exampleInputPassword1">Lozinka</label>
                <input 
                    type="password"
                    v-model="password" 
                    class="form-control" 
                    id="exampleInputPassword1"
                    placeholder="Lozinka" />
            </div>
            <br>

            <div class="form-group2">
                <label for="exampleInputPassword2">Ponovite lozinku</label>
                <input 
                    type="password"
                    v-model="passwordRepeat" 
                    class="form-control"
                    id="exampleInputPassword2"
                    placeholder="Ponovite lozinku"/>
            </div>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            
            

            <b-button variant="danger" @click="signup">Sign Up</b-button>
            </b-card>
                </div>
            </div>
        </div>
    
</template>

<script>

import { firebase } from '@/firebase';

export default {
    name: 'Signup',
    data() {
        return {
            username: '',
            password: '',
            passwordRepeat:'',
        };
    },
    methods: {
        signup() {
            firebase.auth().createUserWithEmailAndPassword(this.username, this.password)
            .then(function() {
                console.log('Uspješna registracija');

                }
            )
            .catch(function(error) {
                console.error("Došlo je do greške", error),
                alert('Lozinka mora imati barem 6 znakova');
            });
            
            console.log('Nastavak');

        },
    },
};
</script>


<style>
.form_group {
    padding-left: 30%;
    padding-right: 30%;
    border: none;
    background-color:rgb(63, 60, 60);
    height: 600px;
}

#sign {
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
 .btn {

 }
</style>