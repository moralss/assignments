const { getClient } = require("../db");

const getBlocks = async locationId => {
  const client = await getClient();
  console.log(typeof locationId);

  let selectQuery2 = `select block.block_name , block.id from block
   inner join location on block.location_id =
   location.id where location.id = $1`;
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
