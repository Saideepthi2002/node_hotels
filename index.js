const express = require("express");
const app = express();
const db = require("./db");

app.use(express.json());

// Import the routes
const personRouter=require('./routes/person')
const menuRouter=require('./routes/menu')
app.use('/person',personRouter)
app.use('/menuItems',menuRouter)



app.listen(3000, () => {
  console.log(`Server is running at the port 3000`);
});
