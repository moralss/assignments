const { getLocation } = require("../src/queries/location");
const { jwtCheck } = require("../src/auth/jwtCheck");

const businessInfoRoutes = app => {
  app.get("/api/businessinfo/:name", jwtCheck, async (req, res) => {
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
