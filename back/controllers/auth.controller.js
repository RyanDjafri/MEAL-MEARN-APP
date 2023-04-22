const UserModel = require("../model/UserModel");
const jwt = require("jsonwebtoken");

const maxAge = 3 * 24 * 60 * 60 * 1000;

const createToken = (id) => {
  return jwt.sign({ id }, process.env.TOKEN_SECRET, {
    expiresIn: maxAge,
  });
};

const signUp = async (req, res) => {
  const { username, email, password } = req.body;
  try {
    const user = await UserModel.create({ username, email, password });
    res.status(201).json({ user: user._id });
  } catch (err) {
    res.status(200).send({ err });
  }
};

const signIn = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await UserModel.login(email, password);
    const token = createToken(user._id);
    res.cookie("jwt", token, { httpOnly: true, maxAge });
    res.status(201).json({ user: user._id });
  } catch (err) {
    res.status(200).json({ err });
  }
};

const logout = () => {
  res.cookie("jwt", { maxAge: 1 });
  res.redirect("/");
};

module.exports = { signUp, signIn, logout };
