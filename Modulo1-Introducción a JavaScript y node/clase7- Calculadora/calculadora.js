let sumar = require('./sumar');
let restar = require('./restar');
let multiplicar = require('./multiplicar');
let dividir = require('./dividir');
let process = require('process');

let operacion = process.argv[2].toLowerCase();
let n1 = +process.argv[3];
let n2 = +process.argv[4];

if(operacion === 'sumar'){
    console.log(" ")
    console.log("El resultado de la suma es " + sumar(n1, n2))
}else if(operacion === restar){
    console.log(" ")
    console.log("El resultado de la resta es " + restar(n1, n2))
}else if(operacion === 'dividir'){
    console.log(" ")
    console.log("El resultado de la división es " + dividir(n1, n2))
}else if(operacion === "multiplicar"){
    console.log(" ")
    console.log("El resultado de la multiplicación es " + multiplicar(n1, n2))
}else{
    'No es una operacion valida'
}
