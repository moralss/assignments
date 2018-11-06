const { getClient } = require("../db");

const getLocation = async businessName => {

  const client = await getClient();
  let selectQuery = `select location.id , location.street ,
    location.city , location.state from
    business left join  location on business.id = location.business_id
    where business.name = $1`;
  let storageInfo;

  try {
    const parameters = [businessName];
    const res = await client.query(selectQuery, parameters);
    storageInfo = res.rows;
    await client.release();
  } catch (e) {
    console.log(e);
    storageInfo = [];
    await client.release();
  }

  return storageInfo;
};

module.exports = {
  getLocation
};
