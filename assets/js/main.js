/*

Attraverso l'apposita API di Boolean https://flynn.boolean.careers/exercises/api/random/mail generare 10 indirizzi email e stamparli in pagina all'interno di una lista.


*/

const { createApp } = Vue

createApp({
    data() {
        return {

            emails: [], //Create ab array to contain all the emails we receive from the API

        }
    },

    mounted() {
        for (let index = 0; index < 10; index++) { //Repeat the API 10 times



            axios.get("https://flynn.boolean.careers/exercises/api/random/mail") //Getting API for random email
                .then(response => {
                    console.log("ciao");
                    this.emails.push(response.data.response); //Push into the array the response of the API
                    console.log(this.emails);
                })
        }
    }
}).mount('#app')