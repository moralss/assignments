const { createToken } = require("../src/auth/createToken");
const { getCustomerInfo } = require("../src/queries/customer");
const { createCustomer } = require("../src/commands/customer");
const { validateNewCustomer } = require("../src/validations/customer");
const { checkPassword } = require("../src/auth/checkPassword");

const customerRoutes = app => {
  app.post("/api/customerlogin", async (req, res) => {
    let { email, password } = req.body;
    const customerDetails = await getCustomerInfo(email);

    if (!customerDetails) {
      return res.status(404).json({ email: "user not found" });
    }

    const { hashed_password } = customerDetails;
    const isValidatePassword = await checkPassword(password, hashed_password);

    if (!isValidatePassword) {
      return res.status(400).json({ password: "password is incorrect" });
    }

    let token = createToken(customerDetails.id, "customer");
    return res.json({ token }).end();
  });

  app.post("/api/customersign", async (req, res) => {
    const customerDetails = req.body;

    const { errors, isValid } = await validateNewCustomer(customerDetails);

    if (!isValid) {
      return res.status(400).json({ errors });
    }

    try {
      await createCustomer(customerDetails);
      let customer = await getCustomerInfo(customerDetails.email);
      let token = createToken(customer.id, "customer");
      res.send({ token }).end();
    } catch (e) {
      res.send(500).end();
      console.log(e);
    }
  });
};

module.exports = { customerRoutes };
