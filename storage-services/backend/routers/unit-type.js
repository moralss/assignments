const { saveUnitType } = require("../src/commands/unit-type");
const { getUnitTypes } = require("../src/queries/unit-type");

const unitTypeRoutes = app => {
  app.post("/api/unittype", async (req, res) => {
    let unitType = req.body;
    res.send(201).end();
    try {
      await saveUnitType(unitType);
      res.status(201).end();
    } catch (e) {
      console.log(e);
      res.status(400).end();
    }
  });

  app.get("/api/unittype/:id", async (req, res) => {
    let blockId = Number(req.params.id);

    try {
      let unitTypes = await getUnitTypes(blockId);
      res.send(unitTypes).end();
    } catch (e) {
      console.log(e);

      res.send(400).end();
    }

  
  });
};

module.exports = { unitTypeRoutes };
