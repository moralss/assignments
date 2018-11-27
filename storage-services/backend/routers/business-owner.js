const passport = require("passport");
const { createToken } = require("../src/auth/createToken");
const { getBusinessOwner } = require("../src/queries/business-owner");
const { createBusinessOwner } = require("../src/commands/business-owner");
const { validateNewOwner } = require("../src/validations/business-owner");

let middeware = passport.authenticate("business-owner");

const businessOwnerRoutes = app => {
  app.post("/businessownerlogin", middeware, async (req, res) => {
    let { email } = req.body;
    try {
      const ownerDetails = await getBusinessOwner(email);
      if (!ownerDetails) {
        res.json("incorrect password").end();
      } else {
        let token = createToken(ownerDetails.id, "business-owner");
        res.send({ token }).end();
      }
    } catch (e) {
      res.send(400).end();
    }
  });

  app.post("/businessownersign", async (req, res) => {
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
