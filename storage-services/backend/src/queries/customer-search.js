const { getClient } = require("../db");

const getUnitTypeInfo = async searchTerm => {
  const { unitType, province } = searchTerm;
  // { province: 'Free State', unitType: 'garage' }

  const client = await getClient();

  let selectQuery = `select  unit_type.name , unit.id , location.city , location.state , 
    location.street , unit_type.height ,  unit_type.width ,
    unit_type.length from business inner join  location on
    business.id = location.business_id
    inner join  block on location.id = block.location_id
    inner join  unit on block.id = unit.block_id 
    inner join  unit_type on  unit.unit_type_id = unit_type.id 
    where unit_type.name = $1  and location.province = $2
    and unit.id NOT IN (SELECT unit_id FROM customer_purchase)
    ;  
    `;

    // searchParams { province: 'Free State', unitType: 'garage' }

    // SELECT  *
    // FROM    Call
    // WHERE   phone_number NOT IN (SELECT phone_number FROM Phone_book)


  //     FROM customers
  // WHERE favorite_website = 'techonthenet.com'
  // AND customer_id > 6000;

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
