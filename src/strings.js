// Utilidades de texto (demo FulService)
function capitalizar(texto) {
  if (!texto) return '';
  return texto.charAt(0).toUpperCase() + texto.slice(1);
}
console.log

function invertir(texto) {
  return String(texto).split('').reverse().join('');
}

module.exports = { capitalizar, invertir };
