const path = require("path");
const express = require("express");
const app = express();
const URL = require("./models/url");
const { connectToMongoDB } = require("./connect");

// Routes
const userRoute = require("./routes/user");
const staticRoute = require("./routes/staticRoute");
const urlRoute = require("./routes/url");

// DB connection
connectToMongoDB("mongodb://127.0.0.1:27017/short-url").then(() => {
  console.log("connected to MongoDB");
});

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/user", userRoute);
app.use("/url", urlRoute);
app.use("/", staticRoute);

app.get("/:shortId", async (req, res) => {
  const shortId = req.params.shortId;
  const entry = await URL.findOneAndUpdate(
    {
      shortId,
    },
    {
      $push: {
        visitedHistory: {
          timestamp: Date.now(),
        },
      },
    }
  );
  res.redirect(entry?.redirectURL);
});

app.listen(8001);
