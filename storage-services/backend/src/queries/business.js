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

module.exports = {
  getBusinesses
};
