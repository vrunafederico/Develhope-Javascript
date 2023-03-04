const hello = () => {console.log("hello")}
function repeatHello(callback){
    let id = setInterval(function (){
        callback()
    },1000)

    setTimeout(() => clearInterval(id), 5000);
}

repeatHello(hello);

