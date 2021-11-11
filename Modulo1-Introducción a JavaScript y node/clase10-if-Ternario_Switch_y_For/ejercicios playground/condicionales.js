/* Fin de semana

El objetivo de este ejercicio es imprimir en consola un texto que irá variando según el día que contenga
la variable dia. Para esto, ya presentamos un código hecho con if/else que tendremos que modificar y
convertirlo a un switch, manteniendo el mismo resultado. */

let dia = 'jueves'
function finDeSemana (dia) {	
	if (dia == 'viernes') {
    	console.log('buen finde')
	} else if (dia == 'lunes') {
    	console.log('buena semana')
	} else {
    	console.log('buen dia')
	}
}

switch (dia){
	case 'viernes':
		console.log('buen finde')
		break;
	case 'lunes':
	    console.log('buena semana')
		break;
	default:
		console.log('buen dia')
		break;
}

/* Tengo clases

El objetivo de este ejercicio es imprimir en pantalla un texto que estará condicionado de la siguiente manera.
Utilizando switch deberemos evaluar si la variable "día" es lunes, miércoles o viernes; y, en ese caso, debe
imprimir el texto "tenés clases". Para cualquier otro caso debe imprimir "no tenés clases". */

function tengoClases(dia) {
	switch (dia) {
    	case 'lunes':
		case 'miércoles':
		case 'viernes':
			console.log("tenés clases")
			break;
		default :
			console.log('no tenés clases')
	}
}

/* Practicando el if ternario

Vamos a poner en práctica el if ternario. En este escenario vamos a contar con dos bicicletas y nos interesa saber
cuál tiene el rodado más grande.
  Para esto, a la variable bicicletaConRodadoGrande debemos asignarle la bicicleta utilizando un operador ternario.
El operador ternario debe comparar los rodados de ambas bicicletas y retornar la que tenga el mayor rodado. */

let bicicletaA = {
    rodado: 18,
    marca: "Mountain Bike"
}
let bicicletaB = {
    rodado: 24,
    marca: "Aurora"
}

let bicicletaConRodadoGrande = bicicletaA.rodado > bicicletaB.rodado ? bicicletaA : bicicletaB ;

console.log("La bicicleta con  mayor rodado es la "+ bicicletaConRodadoGrande.marca );