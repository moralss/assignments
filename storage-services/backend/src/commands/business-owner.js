const { getClient } = require("../db");
const { bcryptPassword } = require("../auth/bcryptPassword");

const createBusinessOwner = async businessOwner => {
  let { email, password} = businessOwner;
  let getBusinessOwnerId
    console.log("businessOwner" , businessOwner);

  const client = await getClient();
  let userStatement = `INSERT INTO business_owner(email ,  hashed_password)
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
  createBusinessOwner
};