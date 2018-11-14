const { getClient } = require("../db");
const { bcryptPassword } = require("../auth/bcryptPassword");

const createCustomer = async customerInfo => {
  let { email, password} = customerInfo;

  const client = await getClient();
  let userStatement = `INSERT INTO customers(email ,  hashed_password)
    VALUES($1 , $2 )  RETURNING id `;

  try {
    const hashedPassword = await bcryptPassword(password);
    let userParameters = [email, hashedPassword];
    let user = await client.query(userStatement, userParameters);

    const id = user.rows[0].id;
  } catch (e) {
    console.log(e);
  }

  await client.release();
};

const createPurchase = async (customerId , unitId) => {
    const client = await getClient();
      
    let userStatement = `INSERT INTO customer_purchase(customer_id ,  unit_id)
      VALUES($1 , $2 )  RETURNING id `;

    try {
      let userParameters = [customerId, unitId];
      let user = await client.query(userStatement, userParameters);
      const id = user.rows[0].id;
    } catch (e) {
      console.log(e);
    }
  
    await client.release();
  };

module.exports = {
  createCustomer,
  createPurchase
};


