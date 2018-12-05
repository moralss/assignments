const { saveBlock } = require("../src/commands/block");
const { getBlocks } = require("../src/queries/block");

const blockRoutes = app => {
  app.post("/block", async (req, res) => {
    const block = req.body;
    console.log("block", block);

    try {
      await saveBlock(block);
      res.status(201).end();
    } catch (e) {
      console.log(e);
      res.status(400).end();
    }
  });

  app.get("/block/:locationid", async (req, res) => {
    const locationId = req.params.locationid;
    try {
      let blocks = await getBlocks(locationId);
      res
        .send(blocks)
        .status(201)
        .end();
    } catch (e) {
      console.log(e);
      res.status(400).end();
    }
  });
};

module.exports = { blockRoutes };
