const { getClient } = require("../db");

const saveLocation = async location => {
  const { street, state, city, id } = location;
  const client = await getClient();
  let insertQuery = `INSERT INTO location(city , state , street , business_id)
    VALUES($1 , $2 , $3 , $4)`;
  let parameters = [city, state, street, id];
  executeQuery(insertQuery, parameters);
};

module.exports = {
  saveLocation
};
