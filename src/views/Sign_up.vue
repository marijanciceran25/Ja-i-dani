<template>

        <div class="form_group1">
           <Navsignup></Navsignup>
           <div class="form_group2">
            <b-card id="sign">
            <h2>Registracija</h2>
            <br>
            <br>
            <div class="form-group3">
                <input 
                    type="email"
                    v-model="username"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp" 
                    placeholder="Email"/>
                    <br>
                    <label for="exampleInputEmail1">Email</label>
            </div>
            <br>
            <br>
          
           
            <div class="form-group4">
                <input 
                    type="password"
                    v-model="password" 
                    class="form-control" 
                    id="exampleInputPassword1"
                    placeholder="Lozinka" />
                    <br>
                    <label for="exampleInputPassword1">Lozinka</label>
            </div>
            <br>
            
           

            <div class="form-group5">
      
                
                <input 
                    type="password"
                    v-model="passwordRepeat" 
                    class="form-control"
                    id="exampleInputPassword2"
                    placeholder="Ponovite lozinku"/>
                    <strong><label class="usporedba" for="passwordnotmatching">{{comparePasswords}}</label></strong>
                    <label class="label1" for="exampleInputPassword2">Ponovite lozinku</label>

                    
                    
                    
                                   
            </div>
            
            
           
            <b-button class="btn" variant="danger" @click="signup">Registriraj se</b-button>
            <br>
            <br>
            <br>
            
            <b-button class="btn2" href="/sign_in">Već imam račun</b-button>
            </b-card>
           </div>
        </div>
        
      
    
</template>

<script>


import { firebase } from '@/firebase';
import Navsignup from '../components/Navsignup.vue';

export default {
    name2: 'Sign_up',
    components: {
        Navsignup,
    
    },
 
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
                alert("Uspješno ste se registrirali!");
                }
            )
            .catch(function(error) {
                console.error("Došlo je do greške", error),
                alert('Niste upisali dobru lozinku ili e-mail adresu!');
            });
            
            console.log('Nastavak');

        },
    },

    computed: {
        comparePasswords () {
            return this.password !== this.passwordRepeat ? 'Lozinka se ne podudara' : ''
        }
    },
};
</script>


<style>
.form_group1 {
    
    border: none;
    background-color:rgb(63, 60, 60);
    
    
}

.form_group2 {
   margin-left: 30%;
   margin-right: 30%;


}

#sign {
    background-color: #044ca4;
    color: aliceblue;
    max-height: 100%;
    border-radius: 10px;
    
  
    
}

div.card {
   
    border-radius: 10px;
    max-width:100%;
    
    
}
 .col {
    padding-left: 0%;

 }

.signup {
    color: aliceblue;
}

.form-group3 {
    margin-left: 30%;
    margin-right: 30%;

}

.form-group5 {
    margin-left: 12%;
    margin-right: 12%;

}
.usporedba {
    color: red;
    font-size: 20px;
    text-align: right;
    margin-left: 67%;
    
}
.label1 {
    margin-left: 0%;
}



</style>