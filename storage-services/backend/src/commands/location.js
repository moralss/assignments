const { getClient } = require("../db");

const saveLocation = async location => {
  const { street, state, city, id } = location;
  const client = await getClient();
  let insertQuery = `INSERT INTO location(city , state , street , business_id)
    VALUES($1 , $2 , $3 , $4) RETURNING ID`;
  let parameters = [city, state, street, id];

  try {
    res = await client.query(insertQuery, parameters);
    let id = res.rows[0].id;
    client.release();
    return id;
  } catch (e) {
    console.log(e);
    client.release();
  }
};

module.exports = {
  saveLocation
};
