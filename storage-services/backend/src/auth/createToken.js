const jwt = require("jwt-simple");
require("dotenv").config();

const createToken = (userId, authority) => {
  return jwt.encode(
    { sub: userId, lat: 3600, authority },
    process.env.JWT_SECRET
  );
};

module.exports = { createToken };
