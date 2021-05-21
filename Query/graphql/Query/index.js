const produtos = require('./Produtos.js');
const usuario = require('./Usuario.js');

module.exports = {
  ...produtos,
  ...usuario    
}