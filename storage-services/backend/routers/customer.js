const passport = require("passport");
const { createToken } = require("../src/auth/createToken");
const { getCustomerInfo } = require("../src/queries/customer");
const { createCustomer } = require("../src/commands/customer");
 
let middeware = passport.authenticate("customer");

const customerRoutes = app => {
  app.post("/customerlogin", middeware, async (req, res) => {
    let { email } = req.body;
    try {
      const customerDetails = await getCustomerInfo(email);
      if (!customerDetails) {
        res.json("incorrect password").end();
      } else {
        let token = createToken(customerDetails.id , "customer");
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
      let customer = await getCustomerInfo(customerDetails.email);
      let token = createToken(customer.id , "customer");
      res.send({ token }).end();
    } catch (e) {
      res.send(500).end();
      console.log(e);
    }
  });
};


module.exports = { customerRoutes };
