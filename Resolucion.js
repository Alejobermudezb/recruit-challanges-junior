interface Entrenador {
    nombre: string;
    reputacion: number;
    plazasDisponibles: number;

}

interface Cliente {
    nombre: string;
    importanciaReputacion: number;
}

let entrenadores: Entrenador[] = [
    {nombre: 'A', reputacion: 4.5, plazasDisponibles: 1}
    {nombre: 'B', reputacion: 3.2, plazasDisponibles: 4}
    {nombre: 'A', reputacion: 1.2, plazasDisponibles: 3}
    {nombre: 'A', reputacion: 3.4, plazasDisponibles: 2}
];

let clientes: Cliente[] = [
    {nombre: 'q', importanciaReputacion: 2.6}
    {nombre: 'r', importanciaReputacion: 3.7}
    {nombre: 's', importanciaReputacion: 8.5}
    {nombre: 't', importanciaReputacion: 9.7}
    {nombre: 'u', importanciaReputacion: 2.6}
    {nombre: 'v', importanciaReputacion: 4.7}
    {nombre: 'w', importanciaReputacion: 5.6}
    {nombre: 'x', importanciaReputacion: 3.7}
    {nombre: 'y', importanciaReputacion: 8.1}
    {nombre: 'z', importanciaReputacion: 2.5}

];

function calcularSatisfaccionTotal(asignacion: Map<Cliente, Entrenador>): number {
    let satisfaccionTotal = 0;
    for (const [cliente, entrenador] of asignacion.entries()) {
      satisfaccionTotal += cliente.importanciaReputacion * entrenador.reputacion;
    }
    return satisfaccionTotal;
  }

function asignarClientes(): Map<Cliente, Entrenador> {
    const asignacion: Map<Cliente, Entrenador> = new Map();
  
    clientes.sort((a, b) => b.importanciaReputacion - a.importanciaReputacion);
  
    for (const cliente of clientes) {
      entrenadores.sort(
        (a, b) =>
          b.reputacion - a.reputacion || a.plazasDisponibles - b.plazasDisponibles
      );
  
      for (const entrenador of entrenadores) {
        if (entrenador.plazasDisponibles > 0) {
          asignacion.set(cliente, entrenador);
          entrenador.plazasDisponibles--;
          break;
        }
      }
    }
  
    return asignacion;
  }

let asignacionFinal = asignarClientes();
let satisfaccionTotal = calcularSatisfaccionTotal(asignacionFinal);
  
console.log('Asignación final:', [...asignacionFinal.entries()]);
console.log('Satisfacción total:', satisfaccionTotal);