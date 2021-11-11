//trayendo el modulo nativo fs
let fs = require('fs');

//creando un objeto para exportar a otros archivos
module.exports = moduloTareas = {
    file: './tareas.json',
    readJSON: () => { //metodo que retorna el json parseado
        let tareasJSON = fs.readFileSync('./tareas.json', "utf-8")
         return JSON.parse(tareasJSON);
    },
    escribirJSON: (info) => {
        let nuevoJSON = JSON.stringify(info)
        fs.writeFileSync('./tareas.json', nuevoJSON, 'utf-8')
    },
    agregarTarea: (titulo, estado) => {
        let tareasAnteriores = moduloTareas.readJSON() //array original
        
        let nuevaTarea = { //nuevo objeto para agregar al array original
            titulo: titulo,
            estado: estado
        }
        
        
        tareasAnteriores.push(nuevaTarea) //agrega al final del array original el nuevo objeto
        
        moduloTareas.escribirJSON(tareasAnteriores) // escribiendo en el JSON con los cambios agregados
    }
}

