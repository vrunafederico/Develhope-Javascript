
let isLogged = true; 
let Control = (isLogged) => {return new Promise((resolve, reject) => {
    isLogged ? resolve(Math.random()) : reject("false");
  })};

let Control2 = (Number) => {return new Promise((resolve, reject) => {
    Number>0.5 ? resolve({nome: "John", età: 24}) : reject("minore di 0.5");
  })};

Control(isLogged)
    .then((val) => Control2(val)
        .then((val) => console.log(val))
        .catch((err) => console.log(err)))
    .catch((err) => console.log(err))


async function Check(isLogged){
    try{ 
        let val = await Control(isLogged);
        let check = await Control2(val);
        console.log(check);
    }catch(err){
        console.log(err)
    }
} 
   
Check(isLogged);