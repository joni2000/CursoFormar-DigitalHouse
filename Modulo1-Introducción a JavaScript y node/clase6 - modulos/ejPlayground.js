/* Importar módulos

Vamos a practicar la importación de los módulos, ya que es algo que usaremos permanentemente.
Nuestro objetivo será crear 3 variables: moduloNativo, moduloInstalado y moduloPropio, en 
donde cada una almacenará un módulo distinto.
La primera deberá requerir el módulo http, la segunda el módulo axios y la tercera un módulo 
local exportado del archivo miFuncion.js. Este último archivo se encuentra en la misma carpeta que nuestro index.js. */

let moduloNativo = require('http')
let moduloInstalado = require('axios')
let moduloPropio = require('./miFuncion')

/* Exportar módulos

Tenemos un array de películas y necesitamos poder compartirlo con otras partes del sistema.
Nuestro trabajo será almacenar este array en la variable arrayDePeliculas y exportarlo usando módulos. */

let arrayDePeliculas = ["Harry Potter","Her", "Up", "Lego"];

module.exports =arrayDePeliculas;