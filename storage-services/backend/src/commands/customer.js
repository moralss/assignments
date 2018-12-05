const { getClient } = require("../db");
const { bcryptPassword } = require("../auth/bcryptPassword");

const createCustomer = async customerInfo => {
  let client = await getClient();
  let { email, password, userName} = customerInfo;
  let userStatement = `INSERT INTO customers(email , hashed_password , user_name)
    VALUES($1 , $2 , $3 )  RETURNING id `;
  try {
    const hashedPassword = await bcryptPassword(password);
    let userParameters = [email, hashedPassword, userName];
    let user = await client.query(userStatement, userParameters);
    const id = user.rows[0].id;
    return id;
  } catch (e) {
    console.log(e);
  }
  await client.release();
};

module.exports = {
  createCustomer
};
