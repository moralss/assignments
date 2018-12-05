const { getClient } = require("../db");

const getBlocks = async locationId => {
  const client = await getClient();
  console.log(typeof locationId);

  let selectQuery2 = `select blocks.block_name , blocks.id from blocks
   inner join locations on blocks.location_id =
   locations.id where locations.id = $1`;
  let parameters = [locationId];

  let blockInfo = "";

  try {
    const resBlock = await client.query(selectQuery2, parameters);
    blockInfo = resBlock.rows;
    await client.release();
  } catch (e) {
    console.log(e);
    blockInfo = [];
    await client.release();
  }

  return blockInfo;
};

module.exports = {
  getBlocks
};
