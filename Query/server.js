const { ApolloServer } = require('apollo-server');
const { importSchema } = require('graphql-import');
const produtos = require('./database/Produtos.json');
const usuarios = require('./database/Usuarios.json');
const perfis = require('./database/Perfis.json');
const resolvers = {
    Usuario: {
        perfil(usuario) {
            let perfil = perfis.find(perfil => perfil.id === usuario.id)
            return perfil
        }
    },

    Query: {
        usuario(_, {id, nome}){
            let usuario;
            if(id || nome !== "undefined"){
                if(Number.isInteger(id)) {
                    usuario = usuarios.find(usuario => usuario.id === id)
                    return usuario
                }else if(typeof nome === 'string') {
                    usuario = usuarios.find(usuario => usuario.nome === nome)
                    return usuario
                }else {
                    return usuario || {}
                }
                
            }else {
                return user || {}
            }
        },

        perfis() {
            return [...perfis]
        },

        usuarios() {
            return [...usuarios]
        },
        
        produtos(){
            return [...produtos]
        },
    }
}

const server = new ApolloServer({
    typeDefs: importSchema('./schema/index.gql'),
    resolvers
})

server.listen().then(({ url }) => {
    console.log(`Executando em  ${url}`)
})
