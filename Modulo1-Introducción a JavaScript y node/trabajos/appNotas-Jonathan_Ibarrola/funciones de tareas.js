//Usando el modulo nativo FS
let fs = require('fs');
let tareasJson = fs.readFileSync('tareas.json', 'utf-8');
let tareas = JSON.parse(tareasJson);

//Usando el modulo nativo process
let process = require('process');
let desplegar = process.argv[2];
let tareaNro = +process.argv[3];

//creando función para importar 
let task = () => {
    let frase = indice => " - La tarea " + tareas[indice].titulo + " se encuentra "+ tareas[indice].estado;    
    if(tareaNro === 1){
        console.log(1 + frase(0));
    }else if(tareaNro === 2){
        console.log(1 + frase(1));
    }else if(tareaNro === 3){
        console.log(1 + frase(2));
    }
    else if(desplegar === "listar"){
        console.log(' ');
        console.log(1 + frase(0));
        console.log(' ');
        console.log(2 + frase(1));
        console.log('');
        console.log(3 + frase(2));
    }else if(desplegar === undefined){
        console.log(' ')
        console.log("Atención - Tienes que pasar una acción.")
    }else{
        console.log('')
        console.log("No entiendo que quieres hacer")
    }
}

module.exports = task;


