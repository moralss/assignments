const { getBusinesses } = require("../src/queries/business");
const { saveBusiness } = require("../src/commands/business");
const { validateBusinessInfo } = require("../src/validations/business");
const { jwtCheck } = require("../src/auth/jwtCheck");

const businessRoutes = app => {
  app.post("/business", jwtCheck, async (req, res) => {
    const business = req.body;
    const businessOwnerId = Number(req.user.id);
    const { errors, isValid } = await validateBusinessInfo(business);

    try {
      if (!isValid) {
        return res.status(400).json({ errors });
      }
    } catch (e) {
      console.log(e);
    }

    try {
      await saveBusiness(business, businessOwnerId);
      return res.status(201).end();
    } catch (e) {
      console.log(e);
      return res.status(500).end();
    }
  });

  app.get("/business", jwtCheck, async (req, res) => {
    const businessOwnerId = Number(req.user.id);
    try {
      const businesses = await getBusinesses(businessOwnerId);
      res
        .json(businesses)
        .status(201)
        .end();
    } catch (e) {
      console.log(e);
      res.status(500).end();
    }
  });
};

module.exports = { businessRoutes };
