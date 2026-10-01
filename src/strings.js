// Utilidades de texto (demo FulService)
function capitalizar(texto) {
  if (!texto) return '';
  return texto.charAt(0).toUpperCase() + texto.slice(1);
}
console.log("Hola");
module.exports = { capitalizar };
