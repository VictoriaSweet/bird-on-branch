const express = require("express");
const app = express();
const cors = require("cors");
app.use(express.json());
app.use(cors());

const initDatabase = require("./schema/init");
initDatabase();

// REST API to get all products details at once
// With this api the frontend will only get the data
// The frontend cannot modify or update the data
// Because we are only using the GET method here.
require("./endpoints/guests")(app);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
