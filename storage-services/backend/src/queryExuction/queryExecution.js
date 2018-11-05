
async function executeQuery(insertQuery, parameters) {
    try {
      await client.query(insertQuery, parameters);
      await client.release();
    } catch (e) {
      console.log(e);
      await client.release();
    }
  }
  

  module.exports = {
      executeQuery
  }