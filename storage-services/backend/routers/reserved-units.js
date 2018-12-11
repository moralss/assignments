const passport = require("passport");
const { getReservedUnits } = require("../src/queries/customer-reserved-units");
const {getBusinessReserverdUnits} = require("../src/queries/business-reserved-units")
const { jwtCheck } = require("../src/auth/jwtCheck");


const reservedUnitsRoutes = app => {
  app.get("/customerreservedunits", jwtCheck, async (req, res) => {
    try {
      const reservedUnits = await getReservedUnits(req.user.id);
      return res.json(reservedUnits);
    } catch (e) {
      console.log(e);
      return res.status(500).end();
    }
  }); 

  app.get("/businessreservedunits", jwtCheck, async (req, res) => {
    try {
      const reservedUnits = await getBusinessReserverdUnits(req.user.id);
      return res.json(reservedUnits);
    } catch (e) {
      console.log(e);
      return res.status(500).end();
    }
  });
};

module.exports = { reservedUnitsRoutes };
