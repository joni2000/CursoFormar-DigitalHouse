let amigos = ["Valeria", "Michel", "Dami", "Josue"]; //array

console.log(amigos);

let amigosJSON = JSON.stringify(amigos);// para pasar a formato JSON

console.log(amigosJSON);

let amigosOriginal = JSON.parse(amigosJSON); //para pasar a formato Javascript

console.log(amigosOriginal);