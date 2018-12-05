const { getClient } = require("../db");
const { bcryptPassword } = require("../auth/bcryptPassword");

const createBusinessOwner = async businessOwner => {
  let { email, password, userName } = businessOwner;
  console.log("businessOwner", businessOwner);

  const client = await getClient();
  let statement = `INSERT INTO business_owners(email , hashed_password , user_name)
    VALUES($1 , $2 , $3 )  RETURNING id `;

  try {
    const hashedPassword = await bcryptPassword(password);
    let userParameters = [email, hashedPassword, userName];
    let user = await client.query(statement, userParameters);
    const id = user.rows[0].id;
    await client.release();
    return id;
  } catch (e) {
    console.log(e);
    await client.release();
  }
};

module.exports = {
  createBusinessOwner
};
