const express = require('express');
const routes = require('./routes');
const sequelize = require('./config/connection');

// import sequelize connection

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

// sync sequelize models to the database, then turn on the server
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});
// This should turn on routes?
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes);

//  turns on the connection to db and server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});