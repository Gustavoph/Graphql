const usuarios = require('../../database/Usuarios.json');
function generatorID() {
    let length = usuarios.length;
    if(length !== 0) {
        length++;
    }else {
        length = 0;
    }
    return length++;
}

module.exports = {
    criarUsuario(_, { data }) {
        const alreadyExists = usuarios.findIndex(usuario => usuario.email === data.email);
        if(alreadyExists === -1){
            let newUser = {
                id: generatorID(),
                nome: data.nome,
                idade: data.idade,
                email: data.email,
                salario: data.salario,
                perfil: 2,
                ativo: data.ativo,
            }
            usuarios.push(newUser);
            return newUser;
        } else {
            return new Error('Usuário já cadastrado');
        }
    },
    atualizarUsuario(_, { id, data }) {
        console.log(id, data)
        return null
    },
    deletarUsuario(_, { filtro }) {
        console.log(filtro)
        const usuarioDeletado = usuarios.find(usuario => usuario.id === filtro.id)
        return true
    }
}