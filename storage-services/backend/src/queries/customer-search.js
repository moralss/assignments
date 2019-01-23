const { getClient } = require("../db");
const getUnitTypeInfo = async searchTerm => {
  const { unitType, province } = searchTerm;
  const client = await getClient();
  let selectQuery = `select businesses.business_name , businesses.contact_email,
  businesses.contact_number , units.id , locations.city , locations.state , 
    locations.street , unit_types.unit_type_name ,blocks.block_name , units.unit_name, 
     unit_types.height ,unit_types.width , unit_types.length from businesses 
    inner join  locations on businesses.id = locations.business_id
    inner join  blocks on locations.id = blocks.location_id
    inner join  units on blocks.id = units.block_id 
    inner join  unit_types on  units.unit_type_id = unit_types.id 
    where unit_types.unit_type_name = $1  and locations.province = $2
    and units.id NOT IN (SELECT unit_id FROM customer_purchases)
    ;  
    `;


  let parameters = [unitType, province];
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
