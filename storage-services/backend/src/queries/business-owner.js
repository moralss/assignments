const { getClient } = require("../db");

const getBusinessOwner = async email => {
  const client = await getClient();
  let statement = `SELECT * FROM business_owners WHERE  email = $1`;
  const res = await client.query(statement, [email]);
  try {
    await client.release();
    return res.rows[0];
  } catch (e) {
    await client.release();
    return;
  }
};

const getBusinessOwnerByUsername = async userName => {
  const client = await getClient();
  let statement = `SELECT * FROM business_owners WHERE  user_name = $1`;
  const res = await client.query(statement, [userName]);
  try {
    await client.release();
    return res.rows[0];
  } catch (e) {
    await client.release();
    return;
  }
};

const getBusinessOwnerId = async id => {
  const client = await getClient();
  let statement = `SELECT * FROM business_owners WHERE  id = $1`;
  const res = await client.query(statement, [id]);
  try {
    await client.release();
    return res.rows[0];
  } catch (e) {
    await client.release();
    return;
  }
};

module.exports = {
  getBusinessOwner,
  getBusinessOwnerId,
  getBusinessOwnerByUsername
};
