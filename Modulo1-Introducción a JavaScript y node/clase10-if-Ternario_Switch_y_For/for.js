// for 
/* for(let i = 10; i >= 0; i--){
    console.log(i)
} */

//recorriendo un array
let frutas = ["Pera", "Frutillas", "Uvas", "Manzana", "Naranja", "Mandarina", "Tomate"]

for(let i = 0; i < frutas.length; i++){
    console.log(i + "- " + frutas[i])
}

function print(text, quantity){
    for(let index = 1; index != quantity; index++){
        console.log("imprimo la palabra " + text)
    }
}

print("loro", 5);

//anidando for 
let alumnos = [
    {
        nombre: "Matias",
        materiasAprobadas: [
            "Matematicas", 
            "Lengua",
            "Naturales"
        ]
    },
    {
        nombre: "Federico",
        materiasAprobadas: [
            "Matematicas", 
            "Lengua",
            "Naturales",
            "observacion de playground"
        ]
    },
    {
        nombre: "Julia",
        materiasAprobadas: [
            "Matematicas", 
            "Lengua",
            "observacion de playground"
        ]
    }
]

for(let i = 0; i < alumnos.length; i++){
    console.log("")
    console.log(alumnos[i].nombre)
    console.log("-----------")
    for(index = 0; index < alumnos[i].materiasAprobadas.length ; index++){
        console.log(alumnos[i].materiasAprobadas[index])
    }
}

