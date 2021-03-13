//uses express npm package to give server functionality
const express = require('express');

// This variable tells node that we are creatinf an "expess server"
const app = express();

//This sets our initial port 8080.
const PORT = process.env.PORT || 8080;

//Sets up the express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Router: this directs our server towards the route files
//These routes give the server a map to respond when users request data.
require('./routes/apiRoutes')(app);
require('./routes/htmlRoutes')(app);

//This starts the server
app.listen(PORT, () => {
    console.log(`App listening on PORT: ${PORT}`);
  });