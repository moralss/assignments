const express = require("express");
const app = express();
const bodyPaser = require("body-parser");
const cors = require("cors");
const location = require("./routers/location");
const business = require("./routers/business");
const businessInfo = require("./routers/get-storage-Info");
const block = require("./routers/block");
const unitType = require("./routers/unit-type");
const businessOwner = require("./routers/business-owner");
const passport = require("passport");
const customer = require("./routers/customer");
const purchase = require("./routers/purchase");
const search = require("./routers/customer-search");
const reservedUnits = require("./routers/reserved-units");

require("./src/auth/passport")(passport);
require("./src/auth/jwtAuth")(passport);
require("./src/auth/passport1")(passport);

app.use(bodyPaser.json());
app.use(cors());
app.use(passport.initialize());
app.use(passport.session());
search.customerSearchRoutes(app);
reservedUnits.reservedUnitsRoutes(app);
purchase.purchaseRoutes(app);
customer.customerRoutes(app);
businessOwner.businessOwnerRoutes(app);
unitType.unitTypeRoutes(app);
location.locationRoutes(app);
business.businessRoutes(app);
businessInfo.businessInfoRoutes(app);
block.blockRoutes(app);

app.listen(3003, function() {
  console.log("server running port 3003");
});
