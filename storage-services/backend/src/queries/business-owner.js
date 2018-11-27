const { getClient } = require("../db");

const getBusinessOwner = async email => {
  const client = await getClient();
  let statement = `SELECT * FROM business_owner WHERE  email = $1`;
  const res = await client.query(statement, [email]);
  try {
    await client.release();
    return res.rows[0];
  } catch (e) {
    await client.release();
    return { message: "user not found!" };
  }
};

const getBusinessOwnerId = async id => {
  const client = await getClient();
  let statement = `SELECT * FROM business_owner WHERE  id = $1`;
  const res = await client.query(statement, [id]);
  try {
    await client.release();
    return res.rows[0];
  } catch (e) {
    await client.release();
    return { message: "user not found!" };
  }
};


module.exports = { getBusinessOwner, getBusinessOwnerId , checkBusinessByEmail};
