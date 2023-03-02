function printAsyncName(name, print){
    setTimeout(function () {
        console.log(name);
    }, 1000);
    setTimeout(function () {
        print()
    }, 2000);
}

function print(){
    console.log("ciao");
}

printAsyncName("francesco", print);