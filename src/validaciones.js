// Validaciones (demo FulService)
function esEmail(valor) {
  return typeof valor === 'string' && /.+@.+\..+/.test(valor);
}

module.exports = { esEmail };
