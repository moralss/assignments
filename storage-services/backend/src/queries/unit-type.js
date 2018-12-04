const { getClient } = require("../db");

const getUnitTypes = async blockId => {
  const client = await getClient();
  
  let selectQuery = `select unit.unit_name , unit_type.unit_type_name , 
  unit_type.length , unit_type.width , unit_type.height  
   from unit  inner join block on unit.block_id = block.id  
  inner join  unit_type on  unit.unit_type_id = unit_type.id 
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
