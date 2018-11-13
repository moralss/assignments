const { getClient } = require("../db");

const saveBusiness = async (business, ownerId) => {
  console.log("current owner id", ownerId);
  const { businessName, phoneNumbers, email } = business;

  const client = await getClient();
  const statement = `INSERT INTO business(name, contact_number,
     contact_email , business_owner_id) values($1, $2, $3 , $4) RETURNING id;`;

  const parameters = [businessName, phoneNumbers, email, ownerId];
  try {
    const res = await client.query(statement, parameters);
    const id = Number(res.rows[0].id);

    await client.release();
    return id;
  } catch (e) {
    console.log(e);
    await client.release();
    return;
  }
};

module.exports = {
  saveBusiness
};
