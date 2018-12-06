const { getClient } = require("../db");

const getLocation = async businessName => {
  const client = await getClient();
  let selectQuery = `select locations.id , locations.street ,
    locations.city , locations.state , locations.province from
    businesses inner join  locations on businesses.id = locations.business_id
    where businesses.business_name = $1`;
  let storageInfo;

  try {
    const parameters = [businessName];
    const res = await client.query(selectQuery, parameters);
    let storageInfo = res.rows;
    await client.release();
    return storageInfo;
  } catch (e) {
    console.log(e);
    storageInfo = [];
    await client.release();
    return storageInfo;
  }
};

module.exports = {
  getLocation
};
