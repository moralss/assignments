const { getUnitTypeInfo } = require("../src/queries/customer-search");

const customerSearchRoutes = app => {
  app.get("/searchunittype/:search", async (req, res) => {
          
    const searchTerm = req.params.search;
    console.log(searchTerm);

    try {
      let unitTypes = await getUnitTypeInfo(searchTerm);
      res.json(unitTypes).end();
    } catch (e) {
      console.log(e);
      res.send(400).end();
    }
  });
};

module.exports = { customerSearchRoutes };
