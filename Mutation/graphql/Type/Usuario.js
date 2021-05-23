const perfis = require('../../database/Perfis.json');

module.exports = {
    perfil(usuario) {
        let perfil = perfis.find(perfil => perfil.id === usuario.perfil)
        return perfil
    }
}