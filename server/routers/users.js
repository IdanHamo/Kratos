const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const router = express.Router();

const { User, validateUser, validateUserLogin } = require("../model/users");

router.post("/login", async (req, res) => {
  console.log(req.body);

  const { error } = validateUserLogin(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  let user = await User.findOne({ username: req.body.username });
  if (!user) return res.status(400).send("המשתמש אינו קיים");

  const validatePassword = await bcrypt.compare(
    req.body.password,
    user.password
  );
  if (!validatePassword)
    return res.status(400).send("השם משתמש או הסיסמא אינם נכונים");

  const token = user.generateAuthToken();
  return res.status(200).send(token);
});

router.post("/createUser", async (req, res) => {
  console.log(req.body);
  const { error } = validateUser(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  let user = await User.findOne({ username: req.body.username });
  if (user) return res.status(400).send("המשתמש כבר קיים");

  user = new User(req.body);
  const salt = await bcrypt.genSalt(10);
  user.password = await bcrypt.hash(user.password, salt);
  await user.save();
  return res.status(200).send({ user, message: "המשתמש נוצר בהצלחה" });
});

module.exports = router;
