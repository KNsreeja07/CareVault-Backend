import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import typeDefs from './typedefs/index';
import { connect } from './db'; 

const server = new ApolloServer({ typeDefs });

async function startServer() {
  await connect();  
  
  await server.start();  

  const app = express();
  server.applyMiddleware({ app });

  const PORT = process.env.PORT || 4000;

  app.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${PORT}${server.graphqlPath}`);
  });
}

startServer().catch(err => {
  console.error('Error starting server:', err.message);
});
