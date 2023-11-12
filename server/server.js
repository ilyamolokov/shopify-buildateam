const express = require("express");
const api = require("./api");
const { fetchAndCacheProducts } = require("./api/helpers");

const app = express();
const PORT = 4000;

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

app.use(express.json());
app.use("/api", api);

app.listen(PORT, "localhost", function (err) {
  if (err) {
    console.log(err);
    return;
  }
  fetchAndCacheProducts();
  console.log("Listening at http://localhost:" + PORT);
});
