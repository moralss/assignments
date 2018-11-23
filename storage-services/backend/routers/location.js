const { saveLocation } = require("../src/commands/location");
const { validateLocation } = require("../src/validations");

const locationRoutes = app => {
  app.post("/location", async (req, res) => {
    const location = req.body;

    if (!validateLocation(location)) {
      return res
        .status(400)
        .json({ error: { message: "Invalid request object" } });
    } else {
      try {
        await saveLocation(location);
        res.status(201).end();
      } catch (e) {
        console.log(e);
        res.status(500).end();
      }
    }
  });
};

module.exports = { locationRoutes };
