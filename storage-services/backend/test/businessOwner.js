const chai = require("chai");
var expect = chai.expect;
const { clearTable } = require("./helpers");
const { createBusinessOwner } = require("../src/commands/business-owner");
const { saveBusiness } = require("../src/commands/business");

describe("Business Owner", function() {
  afterEach(async function() {
    await clearTable("businesses");
    await clearTable("business_owners");
  });

  const userDetails = {
    email: "moraljera@gmail.com",
    password: "password",
    userName: "moral"
  };

  const businessDetails = {
    businessName: "company",
    phoneNumbers: "0824004524",
    email: "game@gmail.com",

  };

  describe.only("Database commands ", () => {
    it.only("Should be able to save a new user to the database", async function() {
      const businessId = await createBusinessOwner(userDetails);
      expect(businessId).to.be.gt(0);
    });

    it.only("Should be able to save a business to the database", async function() {
      const id = await createBusinessOwner(userDetails);
      const businessId = await saveBusiness(businessDetails, id);
      expect(businessId).to.be.gt(0);
    });
  });
});
