//uses express npm package to give server functionality
const express = require('express');

// This variable tells node that we are creatinf an "expess server"
const app = express();

//This sets our initial port 3000.
const PORT = process.env.PORT || 3000;

//Sets up the express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//specifies the root directory from which to serve static assets like images and other files = public folder
app.use(express.static('public'));

//Router: this directs our server towards the route files
//This route give the server a map to respond when users request data.
require('./routes/routes')(app);


//This starts the server and listens.
app.listen(PORT, () => {
    console.log(`App listening on PORT: ${PORT}`);
  });