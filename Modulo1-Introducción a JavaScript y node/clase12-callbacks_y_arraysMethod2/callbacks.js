//CALLBACk
let sumar = (n1, n2) =>  n1 + n2; 
let restar = (n1, n2) =>  n1 - n2;
let dividir= (n1, n2) =>  n1 / n2;
let multiplicar = (n1, n2) =>  n1 * n2;

let calculate = (n1, n2, operation) => {
    return operation(n1, n2)
};

console.log(calculate(5, 5, multiplicar));

setTimeout(()=> {
    console.log('hola mundo - timeout')
}, 1000)

setInterval(() => {
    console.log('hola mundo')
}, 2000);

