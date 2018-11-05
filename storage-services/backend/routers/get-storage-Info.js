const getStorageInfo = require("../src/queries/business-storage-info");

const businessInfoRoutes = app => {
  app.get("/businessinfo/:name", async (req, res) => {
    try {
      
      const name = req.params.name;
      const businessInfo = await getStorageInfo.getStorageInfo(name);
      res
        .send(businessInfo)
        .status(201)
        .end();
    } catch (e) {
      console.log(e);
      res.status(301).end();
    }
  });
};

module.exports = { businessInfoRoutes };
