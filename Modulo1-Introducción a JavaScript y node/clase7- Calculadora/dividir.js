
function dividir (a, b){
    if(a === undefined || b === undefined ){
        return "Tienes que pasarme dos parámetros"
    } else if (typeof a !== "number"|| typeof b !== "number"){
        return "Tienes que pasar solo numeros"
    } else if (a === 0 || b === 0){
        return "No se puede dividir por 0"
    } else {
        return a / b
    }
}

module.exports = dividir