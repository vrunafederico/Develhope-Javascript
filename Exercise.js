const hello = () => {console.log("hello")}
function repeatHello(callback){
    setInterval(function (){
        callback()
    },1000)
}

repeatHello(hello);

