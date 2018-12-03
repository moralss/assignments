const { getUnitTypeInfo } = require("../src/queries/customer-search");

const customerSearchRoutes = app => {
  app.get("/searchunittype", async (req, res) => {
    const searchParams = req.query;
    console.log("searchParams", searchParams);

    try {
      let unitTypes = await getUnitTypeInfo(searchParams);
      res.json(unitTypes).end();
    } catch (e) {
      console.log(e);
      res.send(500).end();
    }
  });
};

module.exports = { customerSearchRoutes };
