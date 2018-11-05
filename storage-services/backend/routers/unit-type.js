const { saveUnitType } = require("../src/commands/unit-type");
const unitTypeRoutes = app => {
  app.post("/unittype", async (req, res) => {
    try {
      await saveUnitType(req.body);
      res.status(201).end();
    } catch (e) {
      console.log(e);
      res.status(301).end();
    }
  });
};

module.exports = { unitTypeRoutes };
