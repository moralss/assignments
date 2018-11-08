const { getLocation } = require("../src/queries/location");

const businessInfoRoutes = app => {
  app.get("/businessinfo/:name", async (req, res) => {
    try {
      const name = req.params.name;
      const locationForBusiness = await getLocation(name);
      res
        .send(locationForBusiness)
        .status(201)
        .end();
    } catch (e) {
      console.log(e);
      res.status(400).end();
    }
  });
};

module.exports = { businessInfoRoutes };
