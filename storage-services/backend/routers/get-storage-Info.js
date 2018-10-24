const getStorageInfo = require("../src/queries/business-storage-info");

const businessInfoRoutes = app => {
    app.get("/businessinfo/:name", async (req, res) => {
    try {
      const name = req.params.name;
      
      const businessInfo = await getStorageInfo.getStorageInfo(name);
      res.send(businessInfo);
    } catch (e) {
      console.log(e);
    }
  });
};

module.exports = { businessInfoRoutes };
