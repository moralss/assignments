const { getClient } = require("../db");
// const {executeQuery} = require("../queryExuction/queryExecution");

const getStorageInfo = async businessName => {
  const client = await getClient();
  let selectQuery = `select location.id , location.street ,
   location.city , location.state ,  block_name from
     business left join  location on business.id = location.business_id
    left join  block on location.id = block.location_id
    left join  unit on block.id = unit.block_id
    left join  unit_type on  unit.unit_type_id = unit_type.id
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
  getStorageInfo
};
