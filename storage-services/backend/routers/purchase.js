const { jwtCheck } = require("../src/auth/jwtCheck");
const { createPurchase } = require("../src/commands/purchase");

const purchaseRoutes = app => {
  app.post("/purchaseunit", jwtCheck, async (req, res) => {
    console.log("user ", req.user);
    const unitId = req.body.unitId;
    console.log("unit id", unitId);
    try {
      await createPurchase(Number(unitId), req.user.id);
      res.send(201).end();
    } catch (e) {
      res.send(500).end();
      console.log(e);
    }
  });
};

module.exports = { purchaseRoutes };
