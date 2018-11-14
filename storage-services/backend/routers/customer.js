const passport = require("passport");
const { createToken } = require("../src/auth/createToken");
const { getCustomerInfo } = require("../src/queries/customer");
const { createCustomer, createPurchase } = require("../src/commands/customer");
const { jwtCheck } = require("../src/auth/jwtCheck");
let middeware = passport.authenticate("local");

const customerRoutes = app => {
  app.post("/customerlogin", middeware, async (req, res) => {
    let { email } = req.body;
    try {
      const customerDetails = await getCustomerInfo(email);
      if (!customerDetails) {
        res.json("incorrect password").end();
      } else {
        let token = createToken(customerDetails.id);
        res.send({ token }).end();
      }
    } catch (e) {
      res.send(400).end();
    }
  });

  app.post("/customersign", async (req, res) => {
    const customerDetails = req.body;
    try {
      await createCustomer(customerDetails);
      let businessOwner = await getCustomerInfo(customerDetails.email);
      let token = createToken(businessOwner.id);
      res.send({ token }).end();
    } catch (e) {
      res.send(500).end();
      console.log(e);
    }
  });

  app.post("/purchaseunit", jwtCheck, async (req, res) => {
    console.log("user " , req.user);
    res.send(201).end();
    

    // const unitId = req.body;
    // try {
    //   await createPurchase(unitId);
    //   res.send(201).end();
    // } catch (e) {
    //   res.send(500).end();
    //   console.log(e);
    // }
  });
};

module.exports = { customerRoutes };
