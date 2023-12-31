// Import express
const express = require('express');
const db = require('./config/connection');

// Import our view_routes
const view_routes = require('./controllers/view_routes');
const user_routes = require('./controllers/user_routes');

// Create the port number and prepare for heroku with the process.env.PORT value
const PORT = process.env.PORT || 3333;

// Create the server app
const app = express();

// Middleware

// Open the static channel for our browser assets - ie. express.static on the public folder
// This is now the root folder of /
app.use(express.static('public'));

// Allow json to be sent to the client
app.use(express.json());

// Load our view routes at the root level '/'
app.use('/', view_routes);
app.use('/auth', user_routes);

// Start the server and log the port that it started on

db.sync()
 .then(() => {
  app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
 })