import { ApolloServer } from 'apollo-server';
import { requreDir } from './utils/request';

function init() {
  const modules = requreDir("graphql")
  const typeDefs = [];
  const resolvers = [];
  modules.forEach(module => {
    if (module.typeDef) {
      typeDefs.push(module.typeDef)
    }
    if (module.resolver) {
      resolvers.push(module.resolver)
    }
  })
  const server = new ApolloServer({ typeDefs, resolvers });

  // The `listen` method launches a web server.
  server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
  });
}

init()