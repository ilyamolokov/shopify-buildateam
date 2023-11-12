const router = require("express").Router();
const fs = require("fs");

router.get("/", async (req, res) => {
  fs.readFile("db/products.json", "utf8", (error, data) => {
    if (error) throw error;
    res.status(200).send(data);
  });
});

module.exports = router;
