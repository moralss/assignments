const { getClient } = require("../db");

const getReservedUnits = async userId => {
  const client = await getClient();
  let selectQuery = `
  select businesses.business_name , businesses.contact_email,
  businesses.contact_number , units.id , locations.city , locations.state , 
    blocks.block_name , locations.street , unit_types.unit_type_name  ,
     unit_types.height ,unit_types.width , unit_types.length 
  from customer_purchases   
  inner join  customers on customer_purchases.customer_id = customers.id
  inner join  units on customer_purchases.unit_id = units.id
  inner join  blocks on blocks.id = units.block_id 
  inner join  locations on locations.id = blocks.location_id      
  inner join  businesses on businesses.id = locations.business_id
  inner join  unit_types on  units.unit_type_id = unit_types.id        
  where customers.id = $1;
`;

  const parameters = [userId];

  try {
    const res = await client.query(selectQuery, parameters);
    const reservedUnits = res.rows;
    await client.release();
    return reservedUnits;
  } catch (e) {
    console.log(e);
    unitInfo = [];
    await client.release();
    return;
  }
};

module.exports = {
  getReservedUnits
};
