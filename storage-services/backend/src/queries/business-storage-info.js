const { getClient } = require("../db");

const getStorageInfo = async businessName => {
  const client = await getClient();

  let selectQuery = `select location.street ,
   location.city , location.state , block.name  from
     business left join  location on business.id = location.business_id
    left join  block on location.id = block.location_id
    left join  unit on block.id = unit.block_id
    left join  unit_type on  unit.unit_type_id = unit_type.id
    where business.name = $1`;
  const parameters = [businessName];

  const res = await client.query(selectQuery, parameters);

  try {
    const storageInfo = res.rows;
    await client.end();
    return storageInfo;
  } catch (e) {
    console.log(e);
    await client.end();
  }
};

module.exports = {
  getStorageInfo
};

// app.get("/businessinfo/:name", (req, res) => {
//   const name = req.params.name;

//   let selectQuery = `select location.street ,
//    location.city , location.state , block.name  from
//      business left join  location on business.id = location.business_id
//     left join  block on location.id = block.location_id
//     left join  unit on block.id = unit.block_id
//     left join  unit_type on  unit.unit_type_id = unit_type.id
//     where business.name = '${name}';`;

//   client.query(selectQuery, (err, result) => {
//     if (err) {
//       console.log(err.stack);
//     } else {
//       res.send(result.rows);
//       console.log(result.rows);
//     }
//   });
// });
