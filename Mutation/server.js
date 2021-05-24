const { ApolloServer } = require('apollo-server');
const { importSchema } = require('graphql-import');
const resolvers = require('./graphql/index')
const port = 3000;

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


server.listen(port).then(({ url }) => {
    console.log(`Executando em  ${url}`)
})
