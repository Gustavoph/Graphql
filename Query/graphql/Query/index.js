const produto = require('./Produto.js');
const usuario = require('./Usuario.js');

module.exports = {
  ...produto,
  ...usuario
}