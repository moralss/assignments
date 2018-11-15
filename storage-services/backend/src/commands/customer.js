const { getClient } = require("../db");
const { bcryptPassword } = require("../auth/bcryptPassword");

const createCustomer = async customerInfo => {
  let client = await getClient();
  let { email, password } = customerInfo;
  let userStatement = `INSERT INTO customers(email ,  hashed_password)
    VALUES($1 , $2 )  RETURNING id `;
  try {
    const hashedPassword = await bcryptPassword(password);
    let userParameters = [email, hashedPassword];
    let user = await client.query(userStatement, userParameters);
    const id = user.rows[0].id;
  } catch (e) {
    console.log(e);
  }
  await client.release();
};


module.exports = {
  createCustomer
};
