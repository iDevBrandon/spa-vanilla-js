const express = require("express");
const app = express();
const bodyParser = require("body-parser");

const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());

app.listen(PORT, () =>
  console.log(`Server started on port: http://localhost:${PORT}`)
);

app.get("/", (req, res) => {
  res.send("Hello World!");
});
