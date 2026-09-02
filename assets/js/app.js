const nombreActividad = "Taller de fotografía";
const capacidad = 30;
let inscritos = 18;

const cuposDisponibles = capacidad - inscritos;

let estado = "Sin determinar";

if (cuposDisponibles === 0) {
    estado = "Completa";
} else if (cuposDisponibles <= 5) {
    estado = "Últimos cupos";
} else {
    estado = "Disponible";
}

function calcularCupos(capacidad, inscritos) {
    return capacidad - inscritos;
}

function obtenerEstado(cuposDisponibles) {
    if (cuposDisponibles === 0) {
        return "Completa";
    }

    if (cuposDisponibles <= 5) {
        return "Últimos cupos";
    }

    return "Disponible";
}

const cuposTaller = calcularCupos(30, 18);
const estadoTaller = obtenerEstado(cuposTaller);

const actividades = [
    "Taller de fotografía",
    "Huerto comunitario",
    "Programación creativa"
];

console.log(`Actividad: ${nombreActividad}`);
console.log(`Capacidad: ${capacidad}`);
console.log(`Inscritos: ${inscritos}`);
console.log(`Quedan ${cuposDisponibles} cupos disponibles`);
console.log(`Estado: ${estado}`);
console.log(`Cupos calculados por función: ${cuposTaller}`);
console.log(`Estado calculado por función: ${estadoTaller}`);
console.log(`La agenda contiene ${actividades.length} actividades`);

for (const actividad of actividades) {
    console.log(actividad);
}