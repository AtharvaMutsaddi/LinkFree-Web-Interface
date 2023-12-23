// imports
// router import
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
// const apiRoutes = require("./routes/api");

// init
const app = express();
const port = 3001;

// middleware
app.use(bodyParser.json());
app.use(cors());
app.use(express.json());
// app.use('/api',apiRoutes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});


const apiRoutes = require("./routes/api");
app.use("/api", apiRoutes);
