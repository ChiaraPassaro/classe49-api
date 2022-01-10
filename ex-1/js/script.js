const app = new Vue({
  el: "#app",
  data: {
    number: null,
  }, 
  created() {
    const self = this;
    // axios
    //   .get("https://flynn.boolean.careers/exercises/api/random/int")
    //   .then(function (response) {
    //     // handle success
    //     console.log(response);
    //     console.log(self.number);
    //     self.number = response.data.response;
    //   })
    //   .catch(function (error) {
    //     // handle error
    //     console.log(error);
    //   });

    // axios
    //   .get("https://flynn.boolean.careers/exercises/api/random/sentence")
    //   .then((response) => {
    //     console.log(response);
    //     console.log(this);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });

    //https://flynn.boolean.careers/exercises/api/array/integers? url
    //min=n&max=n&items=n parametri

    axios
      .get("https://flynn.boolean.careers/exercises/api/array/integers", {
        params: {
          min: 2,
          max: 100,
          items: 10
        },
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    
  },
  methods: {}
});