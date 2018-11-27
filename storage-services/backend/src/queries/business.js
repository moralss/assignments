const { getClient } = require("../db");

const getBusinesses = async ownerId => {
  const client = await getClient();
  let selectQuery = `SELECT business.name  , business.id , 
    business.contact_email , business.contact_number FROM business where 
    business_owner_id = $1
    `;

  let parameters = [ownerId];
  const res = await client.query(selectQuery, parameters);
  try {
    const businesses = res.rows;
    await client.release();
    return businesses;
  } catch (e) {
    console.log(e);
    await client.release();
  }
};

const getBusinessByName = async name => {
  const client = await getClient();
  let selectQuery = `SELECT * FROM business where 
    name = $1
    `;

  let parameters = [name];
  const res = await client.query(selectQuery, parameters);
  try {
    const businesses = res.rows;
    await client.release();
    return businesses;
  } catch (e) {
    console.log(e);
    await client.release();
  }
};

const getBusinessByEmail = async email => {
  const client = await getClient();
  let selectQuery = `SELECT * FROM business where 
  contact_email = $1
  `;

  let parameters = [email];
  const res = await client.query(selectQuery, parameters);
  try {
    await client.release();
    const businesses = res.rows;
    return businesses;
  } catch (e) {
    console.log(e);
    await client.release();
    return
  }
};

module.exports = {
  getBusinesses,
  getBusinessByName,
  getBusinessByEmail
};
