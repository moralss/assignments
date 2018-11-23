const jwt = require("jwt-simple");
let secret = "dbnnf45d";

const createToken = (userId, authority) => {
  const timestamp = new Date().getTime();
  return jwt.encode({ sub: userId, lat: timestamp, authority }, secret);
};

module.exports = { createToken };
