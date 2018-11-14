const { getBusinesses } = require("../src/queries/business");
const { saveBusiness } = require("../src/commands/business");
const { validateBusiness } = require("../src/validations");
const { jwtCheck } = require("../src/auth/jwtCheck");


const businessRoutes = app => {
  app.post("/business", jwtCheck, async (req, res) => {
    const business = req.body;
    const businessOwnerId = Number(req.user.id);
    
    if (!validateBusiness(business)) {
      res.status(400);
      res.json({
        error: {
          message: "Invalid request object"
        }
      });
    } else {
      const id = await saveBusiness(business, businessOwnerId);
      if (id) {
        res.status(201).end();
      } else {
        res.status(500).end();
      }
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
