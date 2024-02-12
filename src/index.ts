import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import typeDefs from './typedefs/index';

const server = new ApolloServer({ typeDefs });

async function startServer() {
  await server.start(); // Make sure to await server.start() before calling server.applyMiddleware()

  const app = express();
  server.applyMiddleware({ app });

  const PORT = process.env.PORT || 3000;

  app.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${PORT}${server.graphqlPath}`);
  });
}

startServer().catch(err => {
  console.error('Error starting server:', err.message);
});
