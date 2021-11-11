//objetos Literales 
let objetoMesa = {
    cantidadDePatas: 4,
    superficie:  2,
    precio: 50,
    descipcion: "descripción",
    color: "Verde",
    material: "Madera",
    altura: 12.5,
    forma: "redonda",
};

let musico1 = {
    nombre: "Luis Alberto",
    apellido: "Spinetta",
    estilo: ["Rock", "Blues", "Jazz"],
    saludar: function(fan){
        return "Hola " + fan + ", soy " + this.nombre; //el this es para acceder a una propiedad dento del mismo object
    }
};

let perro = {
    nombre: "firulays",
    edad: 7,
    ladrar: function(){  //las funciones dentro de los objetos se llaman metodos
        return "Guau guau";
    }
};

console.log(objetoMesa.material) // para traer propiedades de un objeto usamos dot notation
console.log(musico1.estilo);
console.log(perro.ladrar());
console.log(musico1.saludar("joni"));



// FUNCION CONSTRUCTORA
function Musico(nombre, apellido){  //es buena practica empezar con mayuscula esta funcion
    this.nombre = nombre
    this.apellido = apellido
    this.saludo = function(fan){
        return "Hola " + fan + ", soy " + this.nombre; //el this es para acceder a una propiedad dento del mismo object

    }
}

let nombre = "Fito"
let apellido = "Paez"

let musico2 = new Musico(nombre, apellido);
console.log(musico2);
console.log(musico2.saludo("Ezequiel"))

let musico3 = new Musico("Gustavo Cerati");
console.log(musico3);
console.log(musico3.saludo("joni"))