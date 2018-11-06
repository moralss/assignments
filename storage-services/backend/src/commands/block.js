const { getClient } = require("../db");

const saveBlock = async blockInfo => {
  const { blockName, locationId } = blockInfo;
  const client = await getClient();
  let insertQuery = `INSERT INTO block(block_name , location_id)
    VALUES($1 , $2)`;
  let parameters = [blockName, locationId];

  try {
    await client.query(insertQuery, parameters);
    await client.release();
  } catch (e) {
    console.log(e);
    await client.release();
  }
};

module.exports = {
  saveBlock
};
