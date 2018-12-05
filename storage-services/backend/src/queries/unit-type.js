const { getClient } = require("../db");

const getUnitTypes = async blockId => {
  const client = await getClient();
  
  let selectQuery = `select units.unit_name , unit_types.unit_type_name , 
  unit_types.length , unit_types.width , unit_types.height  
   from units  inner join blocks on units.block_id = blocks.id  
  inner join  unit_types on  units.unit_type_id = unit_types.id 
  where block_id = $1;
  `;

  let parameters = [blockId];
  let blockInfo = "";

  try {
    const resBlock = await client.query(selectQuery, parameters);
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
    getUnitTypes
};
