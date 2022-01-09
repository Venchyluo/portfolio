const express = require("express");
const app = express();
const path = require("path");
const port = process.env.PORT || 7000;

if (process.env.NODE_ENV === "production") {
  app.use(express.static("build"));
  app.get("*", (req, res) => {
    req.sendFile(path.resolve(__dirname, "build", "index.js"));
  });
}

app.listen(port, (err) => {
  if (err) return console.log(err);
  console.log("Server running on Port:", port);
});
