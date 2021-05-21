const produtos = require("../../database/Produtos.json");

module.exports = {
  
  produtos() {
    return [...produtos];
  },
};
