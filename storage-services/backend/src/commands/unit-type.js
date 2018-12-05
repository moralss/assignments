const { getClient } = require("../db");

const saveUnitType = async unitTypeInfo => {
  console.log("unit type" , unitTypeInfo);
  const { unitName, unitType, length, width, height, blockId } = unitTypeInfo;
    let idBlock = Number(blockId);
  const client = await getClient();
  
  let parameters = [unitType, length, width, height];
  let insertQuery = `INSERT INTO unit_types(unit_type_name , length, width , height )
    VALUES($1 , $2 , $3 , $4) RETURNING ID`;

  let insertQuery2 = `INSERT INTO units( unit_name , block_id, unit_type_id )
  VALUES($1 , $2 , $3)`;

  try { 

    const res = await client.query(insertQuery, parameters);
    let unitTypeId = Number(res.rows[0].id);

    let parameters2 = [unitName, idBlock, unitTypeId];
    await client.query(insertQuery2, parameters2);

    await client.release();
  } catch (e) {
    console.log(e);
    await client.release();
  }
};

module.exports = {
  saveUnitType
};
