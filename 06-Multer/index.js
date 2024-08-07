const express = require("express");
const app = express();
const path = require("path");
const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + file.originalname);
  },
});

const upload = multer({ storage });

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.render("home");
});

app.post("/", upload.single("inputImage"), (req, res) => {
  console.log(req.file);
  console.log(res.body);
  res.redirect("/");
});

app.listen(9001, () => {
  console.log("port 9001 open");
});
