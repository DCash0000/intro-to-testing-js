var test = true;
// helloWorld function

// function helloWorld() {
//     return "Hello, World!";
// }


const helloWorld = function (){
    return "Hello, World!";
};


const sayHello = function(input){
    if(input === true || typeof input === "undefined"){
        return "Hello, World!"
    }else {
        return "Hello, " + input + "!";
    }
    // if(input === "Alex"){
    //     return "Hello, Alex!";
    // }else if(input === "Pat")  {
    //     return "Hello, Pat!"
    //
    // }else if(input === "Jane"){
    //     return "Hello, Jane!"
    // }else{
    //     return "Hello, World!"
    // }
};

