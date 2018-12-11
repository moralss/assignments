const { getUnitTypeInfo } = require("../src/queries/customer-search");

const customerSearchRoutes = app => {
  app.get("/searchunittype", async (req, res) => {
    const searchParams = req.query;

    try {
      let unitTypes = await getUnitTypeInfo(searchParams);
      return res.json(unitTypes).end();
    } catch (e) {
      console.log(e);
      return res.send(500).end();
    }
  });
};

module.exports = { customerSearchRoutes };
