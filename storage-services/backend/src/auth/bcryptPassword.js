const bcrypt = require("bcryptjs");

const bcryptPassword = async userPassword => {
  try {
    let salt = await bcrypt.genSalt(10);
    let hashed = await bcrypt.hash(userPassword, salt);
    return hashed;
  } catch (e) {
    console.log(e);
  }
};

module.exports = { bcryptPassword };
