console.log('ciao');
let num1;
let num2;
axios
  .get("https://flynn.boolean.careers/exercises/api/random/int")
  .then((response) => {
    // console.log(response.data.response);
    num1 = response.data.response;
    console.log(num1);

    axios
      .get("https://flynn.boolean.careers/exercises/api/random/int")
      .then((response) => {
        num2 = response.data.response;
        // console.log(response.data.response);
        console.log(num2);
        console.log(
          (num1 < num2) ? 'Numero 2 vince' : 'Numero 1 Vince'
        
        );
      })
      .catch((error) => {
        console.log(error);
      });

  })
  .catch((error) => {
    console.log(error);
  });
    
  console.log(num1 , num2);