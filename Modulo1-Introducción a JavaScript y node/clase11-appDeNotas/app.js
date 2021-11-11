let funcionesDeTareas = require('./funcionesDeTareas')
let process = require('process'); //requiriendo modulo nativo process

let instruction = process.argv[2]

switch (instruction){
    case "listar":
        let tasks = funcionesDeTareas.readJSON()//contiene la base de datos completa 
        if(tasks.length === 0){
            console.log('la lista de tareas esta vacía')
        }else{
            console.log(' ')
            console.log("listado de tareas")
            console.log(' ')
            for(let i = 0; i < tasks.length; i++){
                console.log(`titulo: ${tasks[i].titulo} -/- Estado: ${tasks[i].estado}"`)
            }
        }
    break;
    case "agregar":
        let titulo = process.argv[3]
        let estado = process.argv[4]
        funcionesDeTareas.agregarTarea(titulo, estado)
    break;
    case undefined:
        console.log('Atencion - tienes que pasar una acción.')
    break;
    default:
        console.log('No entiendo qué quieres ser')
    break;
}