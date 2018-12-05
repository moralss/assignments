const { getClient } = require("../db");
 
const createPurchase = async (customerId, unitId) => {
  let client = await getClient();
  let userStatement = `INSERT INTO customer_purchases(customer_id ,  unit_id)
        VALUES($1 , $2 )  RETURNING id `;
  let userParameters = [unitId , customerId];
  console.log("customer", userParameters);

  try {
    let user = await client.query(userStatement, userParameters);
    const id = user.rows[0].id;
  } catch (e) {
    console.log(e);
  }

  await client.release();
};

module.exports = {
  createPurchase
};
