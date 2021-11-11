let semaforo = "Rojo";

// if (semaforo == 'verde'){
//     console.log("avanza")
// }else if (semaforo == "amarillo"){
//     console.log("avanza con precacion")
// }else if(semaforo == "rojo"){
//     console.log("stop")
// }else{
//     console.log("no es un color del semaforo")
// }

switch (semaforo.toLocaleLowerCase()){
    case "verde":
        console.log("avanza")
        break;
    case "amarillo":
        console.log("avanza con precacion")
        break;
    case "rojo":
        console.log("stop")
        break;
    default:
        console.log("no es un color del semaforo")
        break;
};

// Switch con rangos numericos
let numero = 25;

switch (true){
    case numero >= 25:
        console.log("Es mayor o igual")
        break;
    case numero < 25:
        console.log("Es menor")
        break;
    default:
        break;
}