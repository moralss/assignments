const passport = require("passport");
const { createToken } = require("../src/auth/createToken");
const { getBusinessOwner } = require("../src/queries/business-owner");
const { createBusinessOwner } = require("../src/commands/business-owner");

let middeware = passport.authenticate("local");

const businessOwnerRoutes = app => {
  app.post("/businessownerlogin", middeware, async (req, res) => {
    let { email } = req.body;
    try {
      const ownerDetails = await getBusinessOwner(email);
      if (!ownerDetails) {
        res.json("incorrect password").end();
      } else {
        let token = createToken(ownerDetails.id);
        res.send({ token }).end();
      }
    } catch (e) {
      res.send(400).end();
    }
  });

  app.post("/businessownersign", async (req, res) => {
    const ownerDetails = req.body;
    try {
      await createBusinessOwner(ownerDetails);
      let businessOwner = await getBusinessOwner(ownerDetails.email);
      let token = createToken(businessOwner.id);
      res.send({ token }).end();
    } catch (e) {
      res.send(500).end();
      console.log(e);
    }
  });
};

module.exports = { businessOwnerRoutes };
