import express from "express";
import { ApolloServer } from 'apollo-server-express';
import typeDefs from './typedefs';
// import resolvers from './resolvers'; // make sure to import your resolvers

const app = express(); // create an express application instance
const server = new ApolloServer({ typeDefs }); // include resolvers here

server.applyMiddleware({ app }); // apply the Apollo middleware to the express application

// use the listen method on the express application instance
app.listen({ port: 4000 }, () => {
  console.log(`
    Server is running!
    Listening on port 4000
    Explore at https://studio.apollographql.com/sandbox
  `);
});
