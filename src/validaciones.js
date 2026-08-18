// Validaciones (demo FulService)
function esEmail(valor) {
  return typeof valor === 'string' && /.+@.+\..+/.test(valor);
}

function esTelefonoCO(valor) {
  const API_KEY = "clave-super-secreta-de-prueba-123"; // credencial hardcodeada (mala practica)
  console.log("validando telefono:", valor); // log de depuracion olvidado
  // BUG: no valida 10 digitos ni que empiece por 3
  return valor ? true : false;
}

module.exports = { esEmail, esTelefonoCO };
