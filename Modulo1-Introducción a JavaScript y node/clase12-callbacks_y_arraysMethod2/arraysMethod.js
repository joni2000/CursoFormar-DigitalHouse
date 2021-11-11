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

//map
/* let probandoMap = alumnos.map( element => {
    element.nombre = "elian"
    return element
}) */

// console.log(probandoMap);


//forEach

for(let i = 0; i < alumnos.length; i++){ //hace lo mismo que foreach
    // console.log(alumnos[i].nombre)
}

let nombres = []

alumnos.forEach(element => nombres.push(element.nombre))
alumnos.forEach((element, index) => console.log(`${index + 1} - ${element.nombre}`))
//  console.log(nombres)


// .filter()

let materias = [
    {
        nombre: "Matematicas",
        aprobado: true
    },
    {
        nombre: "Literatura",
        aprobado: true
    },
    {
        nombre: "ingles",
        aprobado: false
    },
    {
        nombre: "fisica",
        aprobado: true
    },
    {
        nombre: "Biología",
        aprobado: true
    }
]

let materiasAprobadas = materias.filter(materia => materia.aprobado === false) //usando un parametro es suficiente sin invocar

// console.log(materiasAprobadas)

// reduce 

let valores = [100, 150, 200, 500, 1000];

let sumaDeValores = valores.reduce((acumulador, valor)=> {
    return acumulador + valor;
});

console.log(sumaDeValores);



