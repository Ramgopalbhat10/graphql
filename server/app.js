const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');

const app = express();
const PORT = 4000;

mongoose.connect('mongodb://jarvis:subbu10@ds259348.mlab.com:59348/gql-ninja');
mongoose.connection.once('open', () => console.log('connected to db'));

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}))

app.listen(PORT, () => console.log(`now listening for requests on port: ${PORT}`));