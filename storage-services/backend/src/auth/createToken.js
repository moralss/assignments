const jwt = require("jwt-simple");
require("dotenv").config();

const createToken = (userId, authority) => {
  const timestamp = new Date().getTime();
  return jwt.encode({ sub: userId, lat: timestamp, authority }, process.env.JWT_SECRET);
};

module.exports = { createToken };
