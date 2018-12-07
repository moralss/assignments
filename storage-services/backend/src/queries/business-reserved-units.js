const { getClient } = require("../db");

const getBusinessReserverdUnits = async busninessOwnerId => {
  const client = await getClient();
  let selectQuery = `
  select locations.province , locations.city , locations.state , locations.street ,
  units.unit_name , unit_types.height , unit_types.width,
  unit_types.unit_type_name , units.id , unit_type_name  ,
  unit_types.length , blocks.block_name , units.unit_name , businesses.business_name 
  ,customers.user_name , customers.email from customer_purchases   
  inner join  customers on customer_purchases.customer_id = customers.id
  inner join  units on customer_purchases.unit_id = units.id
  inner join  blocks on blocks.id = units.block_id 
  inner join  locations on locations.id = blocks.location_id      
  inner join  businesses on businesses.id = locations.business_id
  inner join  unit_types on  units.unit_type_id = unit_types.id        
  where businesses.business_owner_id = $1;
`;

  const parameters = [busninessOwnerId];

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
  getBusinessReserverdUnits
};
