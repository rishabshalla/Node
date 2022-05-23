const express = require("express"); // it will load the express package in our app

const port = 3000;

// Creating app Object
const app = express();

// middlewares creations

const middleware1 = (req, res, next) => {
  console.log("I am middleware1");
  next();
};

const middleware2 = (req, res, next) => {
  console.log("I am middleware2");
  next();
};

app.use(middleware1); // this middleware si avaible to all 4 routes

// Route Creation

app.get("/", (req, res) => {
  res.send("<h1>I am ROOT page</h1>");
});

app.get("/home", middleware2, (req, res) => {
  // this route has middleware2 also applicable
  res.send("<h1>I am HOME page</h1>");
});

app.get("/about", (req, res) => {
  res.send("<h1>I am ABOUT page</h1>");
});

app.get("/contact", middleware2, (req, res) => {
  // this route has middleware2 also applicable
  res.send("<h1>I am CONTACT page</h1>");
});

// listening to the port

app.listen(port, () => {
  console.log(`Server running at port ${port}`);
});
