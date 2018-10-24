const { getClient } = require("../db");

const getBusinesses = async () => {
  const client = await getClient();

  let selectQuery = `SELECT business.name  , business.id , 
    business.contact_email , business.contact_number FROM business`;

  const res = await client.query(selectQuery);

  try {
    const businesses = res.rows;
    await client.end();
    return businesses;
  } catch (e) {
      
    await client.end();
  }
};

module.exports = {
  getBusinesses
};


