const saveLocation = require('../src/commands/location');
const locationRoutes = (app) => {

app.post("/location", async (req, res) => {
    try {
      await saveLocation.saveLocation(req.body);
      res.status(201).end();
    } catch (e) {
      console.log(e);
      res.status(301).end()
    }
  });
}

module.exports = {locationRoutes}

// {"name":"google" ,"length":"20" ,"width":"43" ,"height":"18" ,"id":"1"}