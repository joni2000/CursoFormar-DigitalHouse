function multiplicar(n1 = 1,n2 = 1){
    let parametro1 = n1;
    let parametro2 = n2;
    if(a === undefined || b === undefined ){
        return "Tienes que pasarme dos parámetros"
    } else if (typeof a !== "number"|| typeof b !== "number"){
        return "Tienes que pasar solo numeros"
    }
    else{
    let resultado = n1 * n2;
    return "El resultado de la multiplicación es: "+ resultado;
    }
}

module.exports = multiplicar;