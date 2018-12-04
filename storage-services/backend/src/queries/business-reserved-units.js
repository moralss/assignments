const { getClient } = require("../db");

const getBusinessReserverdUnits = async busninessOwnerId => {
  const client = await getClient();
  let selectQuery = `
  select unit_type.name , unit.id , location.city , customer_id , location.state , 
  location.street , unit_type.height ,  unit_type.width ,
  unit_type.length , block.block_name , unit.unit_name , business.name 
  from customer_purchase   
  inner join  customers on customer_purchase.customer_id = customers.id
  inner join  unit on customer_purchase.unit_id = unit.id
  inner join  block on block.id = unit.block_id 
  inner join  location on location.id = block.location_id      
  inner join  business on business.id = location.business_id
  inner join  unit_type on  unit.unit_type_id = unit_type.id        
  where business.business_owner_id = $1;
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
