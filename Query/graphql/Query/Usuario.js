const perfis = require("../../database/Perfis.json");
const usuarios = require("../../database/Usuarios.json");

module.exports = {
  usuario(_, { id, nome }) {
    let usuario;
    if (id || nome !== "undefined") {
      if (Number.isInteger(id)) {
        usuario = usuarios.find(usuario => usuario.id === id)
        return usuario
      } else if (typeof nome === 'string') {
        usuario = usuarios.find(usuario => usuario.nome === nome)
        return usuario
      } else {
        return usuario || {}
      }

    } else {
      return user || {}
    }
  },

  perfil(_, { id, descricao }) {
    let perfil;
    if (id) {
      perfil = perfis.find(perfil => perfil.id === id);
      return perfil;

    } else if (descricao) {
      perfil = perfis.find(perfil => perfil.descricao === descricao);
      return perfil;

    } else {
      return perfil || {}
    }
  },
  perfis() {
    return [...perfis]
  },

  usuarios() {
    return [...usuarios]
  },
}