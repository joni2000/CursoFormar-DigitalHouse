let multiplicar = function (a, b) {
   if(a === undefined || b === undefined ){
      return "Tienes que pasarme dos parámetros"
  } else if (typeof a !== "number"|| typeof b !== "number"){
      return "Tienes que pasar solo numeros"
  } else {
      return a * b 
  }
}

module.exports = multiplicar;