const { getClient } = require("../db");

const getBusinesses = async () => {
  const client = await getClient();

  let selectQuery = `SELECT business.name  , business.id , 
    business.contact_email , business.contact_number FROM business`;

  const res = await client.query(selectQuery);

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
