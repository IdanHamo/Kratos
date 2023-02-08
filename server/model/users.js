const Joi = require("joi");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const config = require("config");

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      minLength: 2,
      maxLength: 255,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      minLength: 6,
      maxLength: 1024,
    },
    password: {
      type: String,
      require: true,
      minLength: 6,
      maxLength: 1024,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    methods: {
      generateAuthToken() {
        const token = jwt.sign(
          {
            _id: this._id,
          },
          config.get("jwtKey")
        );
        return token;
      },
    },
  }
);

const User = mongoose.model("User", userSchema);

function validateUser(user) {
  const schema = Joi.object({
    username: Joi.string().required().min(2),
    email: Joi.string()
      .min(6)
      .max(1024)
      .email({ tlds: { allow: false } })
      .required(),

    password: Joi.string().min(6).max(1024).required(),
  });
  return schema.validate(user);
}
function validateUserLogin(user) {
  const schema = Joi.object({
    username: Joi.string().required().min(2),
    password: Joi.string().min(6).max(1024).required(),
  });
  return schema.validate(user);
}

module.exports = { validateUser, User, validateUserLogin };
