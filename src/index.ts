import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { typeDefs, resolvers } from './graphql/schema'; 

const PORT = process.env.PORT || 4000;

async function startServer() {
  const app = express();

  const server = new ApolloServer({
    typeDefs,
    resolvers,
  });

  await server.start();

  server.applyMiddleware({ app });

  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}${server.graphqlPath}`);
  });

 
  app.use((err, _req, res, _next) => {
    console.error('Error occurred:', err.message);
    res.status(500).send('Internal Server Error');
  });
}

startServer().catch(err => {
  console.error('Error starting server:', err.message);
});
