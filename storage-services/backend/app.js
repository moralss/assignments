const express = require("express");
const app = express();
const bodyPaser = require("body-parser");
const cors = require("cors");
const { Pool, Client } = require("pg");

let connectionString = "postges://postgres:1234@localhost/storage_services";

const pool = new Pool({
  connectionString: connectionString
});

const client = new Client({
  connectionString: connectionString
});

pool.query("SELECT NOW()", (err, res) => {
  // console.log(err, res)
  pool.end();
});

client.connect();

// client.query('SELECT NOW()', (err, res) => {
//   // console.log(err, res)
//   client.end()
// })

require("./routers/location")(app);

app.use(bodyPaser.json());
app.use(cors());

app.get("/business", (req, res) => {
  let selectQuery =
    "SELECT business.name , business.id ,  business.contact_email , business.contact_number FROM business";
  client.query(selectQuery, (err, result) => {
    if (err) {
      console.log(err.stack);
    } else {
      res.send(result.rows);
    }
  });
});

app.post("/location/", (req, res) => {
  let insertQuery =
    "INSERT INTO location(city , state , street , business_id) VALUES($1 , $2 , $3 , $4)";
  let locationInfo = [
    req.body.details.city,
    req.body.details.state,
    req.body.details.street,
    req.body.details.id
  ];

  client.query(insertQuery, locationInfo, (err, result) => {
    if (err) {
      console.log(err.stack);
    } else {
      console.log(result);
    }
  });
});

app.post("/business", (req, res) => {
  let insertQuery =
    "INSERT INTO business(name , contact_number , contact_email ) VALUES($1 , $2 , $3)";
  let businessInfo = [
    req.body.details.businessName,
    req.body.details.phoneNumbers,
    req.body.details.email
  ];

  client.query(insertQuery, businessInfo, (err, result) => {
    if (err) {
      console.log(err.stack);
    } else {
      console.log(result);
    }
  });
});

app.listen(3003, function() {
  console.log("server running port 3000");
});
