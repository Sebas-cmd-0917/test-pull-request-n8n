// Operaciones matematicas (demo FulService)
function sumar(a, b) {
  return a + b;
}

function promedio(lista) {
  let total = 0;
  for (const n of lista) {
    total += n;
  }
  return total / lista.length;
}

module.exports = { sumar, promedio };
