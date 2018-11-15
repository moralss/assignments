const { getClient } = require("../db");

const getUnitTypeInfo = async searchTerm => {
  const client = await getClient();
  let selectQuery = `select  unit_type.name , unit.id , location.city , location.state , 
    location.street , unit_type.height ,  unit_type.width ,
    unit_type.length from business inner join  location on
    business.id = location.business_id
    inner join  block on location.id = block.location_id
    inner join  unit on block.id = unit.block_id 
    inner join  unit_type on  unit.unit_type_id = unit_type.id 
    where unit_type.name like $1;
    `;

  let parameters = ["%" + searchTerm + "%"];
  let unitInfo = "";

  try {
    const res = await client.query(selectQuery, parameters);
    unitInfo = res.rows;
    await client.release();
  } catch (e) {
    console.log(e);
    unitInfo = [];
    await client.release();
  }
  return unitInfo;
};

module.exports = {
  getUnitTypeInfo
};
