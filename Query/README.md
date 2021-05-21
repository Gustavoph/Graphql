
 # Scalar Types : Tipos aceitos por padrão pelo GQL
 * - Int 
 * - Float
 * - String 
 * - Boolean
 * - ID

 # Non-null | Array 
 * Usamos o '!' para denotar dados que 
 * não podem voltar resultados sendo null
 * nomes: [String!]! a primeira ! referece ao tipo, ou seja
 * o retorno deve ser uma String o de fora referece ao retorno
 * da consulta, que deve ser diferente de null

 # Type Query | Resolvers
 * Query => Consultas (Solicita uma info)
 * Resolvers => Resolvem as Querys (Devolve a info solicitada) 
 * As Querys são nossos endpoints de consulta
 * ou seja são o nomes das consultas que iremos fazer(chamar)
 * e para cada endpoint nós temos que ter um resolver
 * para resolver a ação e retornar uma resposta

 # Object Types | Fields
 * É um tipo personalizado em que podemos criar
 * Para poder receber várias infos de uma vez, assim
 * ao invés de criar uma Query pra retornar nome outra
 * para retornar idade, criamos o type Pessoa e 
 * retornamos tudo de uma vez

 # Arguments
 * Para que possamos consultar um dado específico é
 * necessário passarmos parametros como ID, Nome, entre
 * outros, e para isso temos os parametros nos nossos
 * resolvers, para que assim possamos fazer uma filtragem

 # Object | Primeiro parâmetro
 * Quando nosso type Query não consegue resolver uma consulta
 * direto, se faz necessário a criação de um novo tipo de Query
 * e esse tipo recebe como primeiro parametro um objeto para resolver

 # Fragments & Aliases
 * Aliases => renomeia a rota para que ela possa 
 * ser utilizada mais de uma vez
 * Fragments => Quando temos parte do código que se repetem
 * podemos criar fragments para poder reutilizar ele e não
 * precisar ficar reescrevendo.

 # Operation Name & Enums
 * Operation Name => Da nome a sua consulta no playground
 * facilitando a busca caso ocorra algum erro
 * Enums => São tipos que pré-determinados, caso o backend
 * retorne algo diferente daquilo irá ocasionar erros

 # Directives & Variables
 * Directives => Através da diretiva nós conseguimos fazer
 * consultas condicionais, como com ou sem perfil, com ou 
 * sem id entre outros
 * Variables => O GraphQL nos orienta a usar variáveis para 
 * a passagem de parametro e através delas podemos passar as 
 * variáveis e ainda definir previamente o tipo