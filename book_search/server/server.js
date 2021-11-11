const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const path = require('path');


//import function from auth.js so it can be applied to apollo.
const { authMiddleware } = require('./utils/auth');
const { typeDefs, resolvers } = require('./schemas');
const db = require('./config/connection');
const routes = require('./routes');

const app = express();
const PORT = process.env.PORT || 3001;

//create server for apollo and add in authMiddlware so it can be used later on in resolver functions. 
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: authMiddleware
});

// apply express as a middleware for our server.
server.applyMiddleware({ app });

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// if we're in production, serve client/build as static assets
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../clinet/build/index.html'));
});

app.use(routes);

db.once('open', () => {
  app.listen(PORT, () => console.log(`🌍 Now listening on localhost:${PORT}`));
});
