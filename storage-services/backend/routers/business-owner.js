const { createToken } = require("../src/auth/createToken");
const { getBusinessOwner } = require("../src/queries/business-owner");
const { createBusinessOwner } = require("../src/commands/business-owner");
const { validateNewOwner } = require("../src/validations/business-owner");
const { checkPassword } = require("../src/auth/checkPassword");

const businessOwnerRoutes = app => {
  app.post("/api/businessownerlogin", async (req, res) => {
    let { email, password } = req.body;
    const ownerDetails = await getBusinessOwner(email);
    if (!ownerDetails) {
      return res.status(404).json({ email: "user not found" });
    }

    const { hashed_password } = ownerDetails;
    const isValidatePassword = await checkPassword(password, hashed_password);

    if (!isValidatePassword) {
      return res.status(400).json({ password: "password is incorrect" });
    }

    let token = createToken(ownerDetails.id, "business-owner");
    return res.json({ token }).end();
  });


  app.post("/api/businessownersign", async (req, res) => {
    const ownerDetails = req.body;
    const { isValid, errors } = await validateNewOwner(ownerDetails);

    if (!isValid) {
      return res.status(400).json({ errors });
    }


    try {
      await createBusinessOwner(ownerDetails);
      let businessOwner = await getBusinessOwner(ownerDetails.email);
      let token = createToken(businessOwner.id, "business-owner");
      return res.status(201).json({ token });
    } catch (e) {
      console.log(e);
      return res.status(500).end();
    }
  });
};

module.exports = { businessOwnerRoutes };
