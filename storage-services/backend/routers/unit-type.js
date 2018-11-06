const { saveUnitType } = require("../src/commands/unit-type");
const { getUnitTypes } = require("../src/queries/unit-type");

const unitTypeRoutes = app => {
  app.post("/unittype", async (req, res) => {
    let unitType = req.body.details;
    console.log("unit type", unitType);
    res.send(201).end();
    try {
      await saveUnitType(unitType);
      res.status(201).end();
    } catch (e) {
      console.log(e);
      res.status(301).end();
    }
  });

  app.get("/unittype/:id", async (req, res) => {
    let blockId = Number(req.params.id);
    console.log("block id", blockId);

    try {
      let unitTypes = await getUnitTypes(blockId);
      console.log("unitTypes" ,unitTypes);

      res.send(unitTypes).end();
    } catch (e) {
      console.log(e);

      res.send(400).end();

    }
  });
};

module.exports = { unitTypeRoutes };
