const chai = require("chai");
var expect = chai.expect;
const { createBusinessOwner } = require("../src/commands/business-owner");
const { saveBusiness } = require("../src/commands/business");
const { saveBlock } = require("../src/commands/block");
const { saveLocation } = require("../src/commands/location");
const { getLocation } = require("../src/queries/location");
const { getBusinesses } = require("../src/queries/business");

const { clearTable } = require("./helpers");

describe("Business", function() {
  afterEach(async function() {
    await clearTable("blocks");
    await clearTable("locations");
    await clearTable("businesses");
    await clearTable("business_owners");
  });

  const userDetails = {
    email: "moraljera@gmail.com",
    password: "password",
    userName: "moral"
  };

  const location = {
    street: "street",
    state: "state",
    city: "city",
    province: "province"
  };

  const businessDetails = {
    businessName: "company",
    phoneNumbers: "0824004524",
    email: "game@gmail.com"
  };

  describe("Database queries", () => {
    it("Should be able to query locations for business", async function() {
      const ownerId = await createBusinessOwner(userDetails);
      const id = await saveBusiness(businessDetails, ownerId);
      const currentLocation = { ...location, id };
       await saveLocation(currentLocation);
      const locations = await getLocation("company");
      expect(locations[0].street).to.eq(location.street);
      expect(locations[0].city).to.eq(location.city);
      expect(locations[0].state).to.eq(location.state);
      expect(locations[0].province).to.eq(location.province);
    });

    it("Should be able to query businesses", async function() {
      const id = await createBusinessOwner(userDetails);
       await saveBusiness(businessDetails, id);
      const businesses = await getBusinesses(id);
      expect(businessDetails.street).to.eq(businesses.street);
      expect(businessDetails.city).to.eq(businesses.city);
      expect(businessDetails.state).to.eq(businesses.state);
    });
  });
});

