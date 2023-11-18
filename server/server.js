const express = require('express');
const { ApolloServer } = require('@apollo/server');
const { expressMiddleware } = require('@apollo/server/express4');
const path = require('path');
const { authMiddleware } = require('./utils/auth');

const { typeDefs, resolvers } = require('./schemas');
const db = require('./config/connection');

const cors = require('cors');

const PORT = process.env.PORT || 3001;
const app = express();
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

/* Socket.io */
const http = require('http')
const socketIo = require('socket.io')
const httpServer = http.createServer(app)
const io = socketIo(httpServer);

// Create a new instance of an Apollo server with the GraphQL schema
const startApolloServer = async () => {
  await server.start();

  app.use(express.urlencoded({ extended: false }));
  app.use(express.json());

  // Serve up static assets
  app.use('/images', express.static(path.join(__dirname, '../client/images')));

  app.use(cors());

  app.use('/graphql', expressMiddleware(server, {
    context: authMiddleware
  }));

  if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/dist')));

    app.get('*', (req, res) => {
      res.sendFile(path.join(__dirname, '../client/dist/index.html'));
    });
  }

  db.once('open', () => {
    httpServer.listen(PORT, () => { /*changed app.listen to httpServer.listen*/
      console.log(`API server running on port ${PORT}!`);
      console.log(`Use GraphQL at http://localhost:${PORT}/graphql`);
      console.log(`Socket.io server running on port ${PORT}`)
    });
  });
};

// Call the async function to start the server
startApolloServer();
