const number = 15;

const myPromise = (number) => new Promise((resolve, reject) => {
    if(number > 10){ 
      resolve("it's greater than 10") 
    }else{
      reject("it's not greater than 10");
    }
});

myPromise(number)
  .then((result) => console.log(result))
  .catch((result) => console.log(result));