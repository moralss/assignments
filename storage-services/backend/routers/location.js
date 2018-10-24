const saveLocation = require('../src/commands/location');

const locationRoutes = (app) => {

app.post("/location", async (req, res) => {
    console.log("location info" , req.body)

    try {
      await saveLocation.saveLocation(req.body);
      res.send(201);
    } catch (e) {
      console.log(e);
    }
  });

}

module.exports = {locationRoutes}