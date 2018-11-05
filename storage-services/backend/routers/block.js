const { saveBlock } = require("../src/commands/block");
const blockRoutes = app => {
  app.post("/block", async (req, res) => {
    try {
      await saveBlock(req.body);
      res.status(201).end();
    } catch (e) {
      console.log(e);
      res.status(301).end();
    }
  });
};

module.exports = { blockRoutes };
