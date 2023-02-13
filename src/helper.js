export function obtenerDiferenciaYear(year) {
  return new Date().getFullYear() - year;
}

export function calcularMarca(marca) {
  let incremento;
  switch (marca) {
    case "Americano":
      incremento = 1.15;
      break;
    case "Asiatico":
      incremento = 1.05;
      break;
    case "Europeo":
      incremento = 1.3;
      break;
    default:
      break;
  }
  return incremento;
}

export function obtenerPlan(plan) {
    return (plan ==="basico") ? 1.20 : 1.50;
}


export function primeraMayuscula(texto){
  return texto.charAt(0).toUpperCase() + texto.slice(1);
}