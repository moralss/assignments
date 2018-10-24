const showBusinesses = require("../src/queries/business");
const saveBusiness = require("../src/commands/business");


const businessRoutes = app => {
    app.post("/business", async (req, res) => {
        try {
          await saveBusiness.saveBusiness(req.body);
          res.send(201);
        } catch (e) {
          console.log(e);
        }
      });
      
      app.get("/business", async (req, res) => {
        try {
          const businesses = await showBusinesses.getBusinesses(req.body);
          res.json(businesses);
        } catch (e) {
          console.log(e);
        }
      });
      
};

module.exports = { businessRoutes };
