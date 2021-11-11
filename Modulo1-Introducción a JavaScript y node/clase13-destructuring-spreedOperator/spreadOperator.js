let clubesUno = ["Sacachispas", "All Boys", "Atlas"];
let clubesDos = ["Yapanqui", "Mandiyu", "Nueva Chicago"];

let todosLosClubes = [...clubesUno, ...clubesDos]

console.log(todosLosClubes)

let dia1 = [12, 15, 85, 150]
let dia2 = [12, 15, 850, 150]
let dia3 = [12, 15, 40, 130]

let caja = [...dia1, ...dia2, ...dia3]

let total= caja.reduce((acum, num) => acum + num)

console.log(total)

//rest parameter

function totalSuma(...numeros) {
    return numeros.reduce((acum, num )=> acum + num)
}

console.log(totalSuma(1, 2, 3, 5, 5))