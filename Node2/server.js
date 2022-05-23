const express = require("express"); // it will load the express package in our app
const path = require("path");

const port = 3000;

// Creating app Object
const app = express();

// Route Creation

app.get("/", (req, res) => {
  res.send("Elevation Academy");
});

app.get("/api/main", (req, res) => {
  res.send("Hello World"); // text response
  res.send("<h1>Hello World</h1>"); // html response
  res.send({
    name: "VISHAL",
    age: 23,
  }); // json response

  const filePath = path.join(__dirname + "/index.html"); // the absolute path of my file
  res.sendFile(filePath); // file response
});

// listening to the port

app.listen(port, () => {
  console.log(`Server running at port ${port}`);
});
