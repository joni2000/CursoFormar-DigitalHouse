// metodos para los strings
let nombre = "Damian";

console.log(nombre[0]); //para traer el caracter suegun su indice

let serie = "Breaking Bad";
console.log(serie.length) //para saber cuantos caracteres contiene el string
console.log(serie[11]);

let saludo = "¡hola! ¿como estas?"

console.log(saludo.indexOf("hola"));// retorna la posicion del elemento pasado como parametro
console.log(saludo.slice(1, 5)); //slice sirve para recortar strings segun su posición 
console.log(saludo.slice(7)); //en este caso corta todo lo que sigue desde el indice 7

//trim()   elimina los caracteres vacios

let nombreDeUsuario = "  Jonathan   ";
let apellido = " Ibarrola"
console.log(nombreDeUsuario.trim() + apellido);
console.log(nombreDeUsuario.trim());  //ejemplos de trim()

//split()

let frase = "Sin música la vida sería un error.";
console.log(frase.split(' '));// te convierte el string en array separando los elementos segun el parametro


let afirmacion = "¡Aguante Python!";
console.log(afirmacion.replace("Python", "Javascript")) //replace recibe como primer parametro el elemento
                                                        //que queremos modificar y el segundo el que lo va a reemplazar


