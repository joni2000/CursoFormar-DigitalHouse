let seriesDataBase = require("./series/series"); //requiero lo que exporta el archivo series.js
const seriesView = require("./series/seriesView");

console.log(seriesView(seriesDataBase[2]));

//prueba de como llamar en una function a un index de un array
let prueba = ["loco", "viejo"];

function prueba1(se) {
    return "esta prueba dice " + se;
}

console.log(prueba1(prueba[1]));

