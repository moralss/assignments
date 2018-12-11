const bcrypt = require("bcryptjs");

const checkPassword = async (userPassword, hashed_password) => {

  try {
    const isMatch = await bcrypt.compare(userPassword, hashed_password);
    if (isMatch) return true;
    if (!isMatch) return false;
  } catch (e) {
    console.log(e);
  }
};

module.exports = { checkPassword };
