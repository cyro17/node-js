const { v4: uuid } = require("uuid");
const User = require("../models/user");

const { setUser } = require("../service/auth");

async function handleUserSignup(req, res) {
  const { name, email, password } = req.body;
  const createdUser = await User.create({
    name,
    email,
    password,
  });
  return res.redirect("/");
}
async function handleUserLogin(req, res) {
  const { email, password } = req.body;
  const user = await User.findOne({
    email,
    password,
  });
  if (!user)
    return res.render("login", {
      error: "Invalid Username or Password",
    });

  const sessionID = uuidv4();
  res.cookie("uid", sessionID);
  setUser(sessionID, user);
  f;
  return res.redirect("/");
}

module.exports = { handleUserSignup, handleUserLogin };
