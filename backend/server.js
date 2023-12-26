// imports
// router import
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require('mongoose');
const secrets=require('./secrets.json')
// const apiRoutes = require("./routes/api");

// init
const app = express();
const port = process.env.PORT || 3001;

// middleware
app.use(bodyParser.json());
app.use(cors());
app.use(express.json());

app.listen(port, () => {
  console.log(`Server is running on http://${process.env.HOSTNAME || "localhost"}:${port}`);
});

// Mongo DB connection- use ur own connection string here in a secrets.json file
mongoose.connect(secrets.mongo_connection_string, {
  useNewUrlParser: true,
  useUnifiedTopology: true, 
});

mongoose.connection.on('connected', () => {
  console.log('Connected to MongoDB'); 
});

const apiRoutes = require("./routes/api");
app.use("/api", apiRoutes);
