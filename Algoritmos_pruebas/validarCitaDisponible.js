/**
 * validarCitaDisponible.js
 * -------------------------------------------------------------
 * Algoritmo básico de prueba para el microservicio ms-citas-medicas.
 *
 * Dado un arreglo de horarios YA OCUPADOS (ordenados de menor a mayor,
 * en formato de minutos desde las 00:00) y un horario solicitado por
 * el paciente, determina si ese horario está disponible usando
 * BÚSQUEDA BINARIA (O(log n)).
 *
 * Contexto EPS: sirve para validar rápidamente disponibilidad de
 * citas médicas sin recorrer toda la agenda del profesional.
 * -------------------------------------------------------------
 */

function busquedaBinaria(horariosOcupados, horarioBuscado) {
  let inicio = 0;
  let fin = horariosOcupados.length - 1;

  while (inicio <= fin) {
    const medio = Math.floor((inicio + fin) / 2);

    if (horariosOcupados[medio] === horarioBuscado) {
      return medio; // el horario ya está ocupado
    } else if (horariosOcupados[medio] < horarioBuscado) {
      inicio = medio + 1;
    } else {
      fin = medio - 1;
    }
  }

  return -1; // no se encontró: el horario está disponible
}

function validarCitaDisponible(horariosOcupados, horarioSolicitado) {
  const posicion = busquedaBinaria(horariosOcupados, horarioSolicitado);
  return posicion === -1;
}

// --------------------- Prueba del algoritmo ---------------------
// Horarios ocupados de un médico (en minutos desde las 00:00),
// ya ordenados: 08:00, 08:30, 09:30, 10:00, 11:00
const horariosOcupados = [480, 510, 570, 600, 660];

const horarioPaciente1 = 510; // 08:30 -> ocupado
const horarioPaciente2 = 540; // 09:00 -> disponible

console.log(
  `Horario 08:30 disponible: ${validarCitaDisponible(horariosOcupados, horarioPaciente1)}`
);
console.log(
  `Horario 09:00 disponible: ${validarCitaDisponible(horariosOcupados, horarioPaciente2)}`
);

module.exports = { validarCitaDisponible, busquedaBinaria };
