const { ApolloServer } = require('apollo-server');
const { importSchema } = require('graphql-import');
const resolvers = require('./graphql/index')

const server = new ApolloServer({
    typeDefs: importSchema('./schema/index.gql'),
    resolvers,
    formatError: (err) => {
        if(err.message.startsWith("Usuário já cadastrado")){
            return new Error(err.message);
        }else {
            return err
        }
    }
})

server.listen().then(({ url }) => {
    console.log(`Executando em  ${url}`)
})
