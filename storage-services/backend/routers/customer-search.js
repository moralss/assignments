const { getUnitTypeInfo } = require("../src/queries/customer-search");

const customerSearchRoutes = app => {
  app.get("/searchunittype/:searchterm", async (req, res) => {
    const searchParams = req.params.searchterm;
    const  searchObject = JSON.parse(searchParams);
    console.log(searchObject.data);
    
    try {
      let unitTypes = await getUnitTypeInfo(searchObject.data);
      res.json(unitTypes).end();
    } catch (e) {
      console.log(e);
      res.send(500).end();
    }
  });
};

module.exports = { customerSearchRoutes };
