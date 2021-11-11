function dividir(n1 = 1, n2 = 1){
    let parametro1 = n1;
    let parametro2 = n2;
    if(a === undefined || b === undefined ){
        return "Tienes que pasarme dos parámetros"
    } else if (typeof a !== "number"|| typeof b !== "number"){
        return "Tienes que pasar solo numeros"
    }
    else if(n1 != 0 && n2 != 0){
        let resultado = n1 / n2;
        return "El resultado de la división es: " + resultado; 
    }
    else {
        return "No se puede dividir por cero";
    }
};

module.exports = dividir;