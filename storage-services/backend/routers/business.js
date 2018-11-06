const { getBusinesses } = require("../src/queries/business");
const { saveBusiness } = require("../src/commands/business");

const businessRoutes = app => {
  
  app.post("/business", async (req, res) => {
    try {
      await saveBusiness(req.body.details);
      res.status(201).end();
    } catch (e) {
      console.log(e);
      res.status(401).end();
    }
  });

  app.get("/business", async (req, res) => {
    try {
      const businesses = await getBusinesses();
      res
        .json(businesses)
        .status(201)
        .end();
    } catch (e) {
      console.log(e);
      res.status(201).end();
    }
  });
};

module.exports = { businessRoutes };
