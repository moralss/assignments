const { getBusinesses } = require("../src/queries/business");
const { saveBusiness } = require("../src/commands/business");
const { validateBusiness } = require("../src/validations");

const businessRoutes = app => {
  app.post("/business", async (req, res) => {
    const business = req.body;
    if (!validateBusiness(business)) {
      res.status(400);
      res.json({
        error: {
          message: "Invalid request object"
        }
      });
    } else {
      const id = await saveBusiness(business);
      if (id) {
        res.status(201).end();
      } else {
        res.status(500).end();
      }
    }
  });

  app.get("/business", async (req, res) => {
    try {
      const businesses = await getBusinesses();
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
