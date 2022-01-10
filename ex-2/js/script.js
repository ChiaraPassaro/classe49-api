const app = new Vue({
  el: "#app",
  data: {
    numPlayer: 10,
    numPC: 5,
    sentence: null
  },
  created() {
    axios
      .get("https://flynn.boolean.careers/exercises/api/random/int")
      .then((response) => {
        console.log(response.data.response);
        this.numPlayer = response.data.response;
      })
      .catch((error) => {
        console.log(error);
      });

    axios
      .get("https://flynn.boolean.careers/exercises/api/random/int")
      .then((response) => {
        console.log(response.data.response);
        this.numPC = response.data.response;
      })
      .catch((error) => {
        console.log(error);
      });

    console.log(this.numPlayer, this.numPC);
  },
  methods: {
    getSentence() {
       axios
         .get("https://flynn.boolean.careers/exercises/api/random/sentence")
         .then((response) => {
           console.log(response.data.response);
           this.sentence = response.data.response;
         })
         .catch((error) => {
           console.log(error);
         });
    }
  },
});


// Attraverso l'apposita API di Boolean
// https://flynn.boolean.careers/exercises/api/random/mail
// generare 10 indirizzi email e stamparli in pagina all'interno di una lista.