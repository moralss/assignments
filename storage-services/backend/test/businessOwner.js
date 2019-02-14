const chai = require("chai");
var expect = chai.expect;
const { clearTable } = require("./helpers");
const { createBusinessOwner } = require("../src/commands/business-owner");
const { saveBusiness } = require("../src/commands/business");
const { saveLocation } = require("../src/commands/location");
const { saveBlock } = require("../src/commands/block");

describe("Business Owner", function() {
  afterEach(async function() {
    await clearTable("blocks");
    await clearTable("locations");
    await clearTable("businesses");
    await clearTable("business_owners");
  });

  const userDetails = {
    email: "moralera@gmail.com",
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

  describe("Database commands ", () => {
    it("Should be able to save a new user to the database", async function() {
      const businessId = await createBusinessOwner(userDetails);
      expect(businessId).to.be.gt(0);
    });

    it("Should be able to save a business to the database", async function() {
      const id = await createBusinessOwner(userDetails);
      const businessId = await saveBusiness(businessDetails, id);
      expect(businessId).to.be.gt(0);
    });

    it("Should be able to save a location for a business", async function() {
      const ownerId = await createBusinessOwner(userDetails);
      const id = await saveBusiness(businessDetails, ownerId);
      const currentLocation = { ...location, id };
      const locationId = await saveLocation(currentLocation);
      expect(locationId).to.be.gt(0);
    });

    it("Should be able to save a block for a business", async function() {
      const ownerId = await createBusinessOwner(userDetails);
      const id = await saveBusiness(businessDetails, ownerId);
      const currentLocation = { ...location, id };
      const locationId = await saveLocation(currentLocation);
      const blockObject = { blockName: "block 1", locationId: locationId };
      const blockId = await saveBlock(blockObject);
      expect(blockId).to.be.gt(0);
    });
  });
});
