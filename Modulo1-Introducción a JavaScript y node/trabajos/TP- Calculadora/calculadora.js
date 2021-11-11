let sumar = require("./operaciones/sumar");
let restar = require("./operaciones/restar");
let multiplicar = require("./operaciones/multiplicar"); 
let dividir = require("./operaciones/dividir");
let process = require('process');

let operacion = process.argv[2].toLowerCase();
let n1 = +process.argv[3];
let n2 = +process.argv[4];

if(operacion === 'sumar'){
    console.log(" ")
    console.log(sumar(n1, n2));
}else if(operacion === restar){
    console.log(" ")
    console.log(restar(n1, n2));
}else if(operacion === 'dividir'){
    console.log(" ")
    console.log(dividir(n1, n2))
}else if(operacion === "multiplicar"){
    console.log(" ")
    console.log(multiplicar(n1, n2));
}
