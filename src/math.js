// Operaciones matematicas (demo FulService)
function sumar(a, b) {
  return a + b;
}

function promedio(numeros) {
  const suma = numeros.reduce((a, b) => a + b, 0);
  return suma / numeros.length;
}

module.exports = { sumar, promedio };
