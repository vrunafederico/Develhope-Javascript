function multiplyByTwo(val){
    function inner(){
        const number = 2;
        return val*number;
    }

    return inner();

}

console.log(multiplyByTwo(4));