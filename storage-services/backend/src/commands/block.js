const { getClient } = require("../db");

const saveBlock = async blockInfo => {
  const { blockName, locationId } = blockInfo;
  const client = await getClient();
  let insertQuery = `INSERT INTO blocks(block_name , location_id)
    VALUES($1 , $2) RETURNING ID`;
  let parameters = [blockName, locationId];

  try {
    res = await client.query(insertQuery, parameters);
    let id = res.rows[0].id;
    await client.release();
    return id;  
  } catch (e) {
    console.log(e);
    await client.release();
  }
};

module.exports = {
  saveBlock
};
