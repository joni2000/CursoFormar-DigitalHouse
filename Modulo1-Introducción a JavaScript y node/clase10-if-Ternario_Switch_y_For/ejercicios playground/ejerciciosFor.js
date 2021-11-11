/* Repetir como un loro

Vamos a programar una función que se comporte como un loro. Sí, todo lo que "oye", ¡lo repite!
La función debe llamarse loro y debe recibir como parámetro el texto y repetirlo 5 veces por consola. */

let  loro = text => {
    for(i = 1; i <= 5; i++){
        console.log(text)
    }
}

/* Contar impares
¡Vamos a crear una función interesante!

En este ejercicio nuestra tarea es completar la función noParesDeContarImparesHasta. Esta función recibe un número
X por parámetro y cuenta la cantidad de números impares que hay desde el número 0 hasta el número X (inclusive) y
luego retorna ese valor. Para resolver la ejercitación debemos utilizar el for. */

function noParesDeContarImparesHasta(numeroX){
    let impares = 0;
    for( i = 0;  i <= numeroX;  i++){
          if(i %2 !=0) {
              impares++; 
         } 
    }
    return impares;
}
