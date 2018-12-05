const { getClient } = require("../db");
const { bcryptPassword } = require("../auth/bcryptPassword");

const createCustomer = async customerInfo => {
  let client = await getClient();
  let { email, password, phoneNumber} = customerInfo;
  let userStatement = `INSERT INTO customers(email , hashed_password , customer_phone_numbers)
    VALUES($1 , $2 , $3 )  RETURNING id `;
  try {
    const hashedPassword = await bcryptPassword(password);
    let userParameters = [email, hashedPassword, phoneNumber];
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
