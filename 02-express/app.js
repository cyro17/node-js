const path = require("path");
const http = require("http");
const express = require("express");
const errorController = require("./controllers/error");

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

const rootDir = require("./util/path");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

// serving css files statically
app.use(express.static(path.join(rootDir, "public")));

app.set("view engine", "ejs");
app.set("views", "views");

// calling admin routes in here , order is important here
// filtering routes
app.use("/admin", adminRoutes);
app.use("/shop", shopRoutes);

app.use(errorController.get404);

// const server = http.createServer(app);
// server.listen(3000);

// can be replaced by above two lines of creating server and then adding eventlistener to it
app.listen(3000);

/* 

app.use(function (req, res, next) {
  console.log("Middleware called");
  next();
});

// Requests will never reach this route
app.get("/user", function (req, res) {
  console.log("/user request called");
  res.send("Welcome to GeeksforGeeks");
});

app.listen(3000, function (err) {
  if (err) console.log(err);
  console.log(`Server listening on PORT 3000`);
});

*/
