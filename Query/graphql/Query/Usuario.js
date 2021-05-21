const usuarios = require("../../database/Usuarios.json");
const perfis = require("../../database/Perfis.json");

module.exports = {
    usuario(_, { id, nome }) {
        let usuario;
        if (id || nome !== "undefined") {
          if (Number.isInteger(id)) {
            usuario = usuarios.find((usuario) => usuario.id === id);
            return usuario;
          } else if (typeof nome === "string") {
            usuario = usuarios.find((usuario) => usuario.nome === nome);
            return usuario;
          } else {
            return usuario || {};
          }
        } else {
          return user || {};
        }
      },
  
      perfis() {
        return [...perfis];
      },
}