const chai = require("chai");
var expect = chai.expect;

const { saveBusiness } = require("../src/commands/business");
// const Businesses = require("../src/queries/business-storage-info");
const { clearTable } = require("./helpers");

describe("Business", function() {
  afterEach(async function() {
    await client.query(`DELETE FROM business`);
  });

  const testBusiness = {
    businessName: "Fkeusnessnae",
    phoneNumbers: "Fmber",
    email: "Fae@f.cm"
  };

  it("Should be able to save a new user to the database", async function() {
    const id = await saveBusiness(testBusiness);
    expect(id).to.be.gt(0);
  });

  it.only("Should be able to get a user by name from the database", async function() {
    // const businesses = await Businesses.getStorageInfo();
    // expect(businesses.name).to.eq(testUser.businessName)
    // expect(businesses.contact_number).to.eq(testUser.phoneNumbers)
    // expect(businesses.contact_email).to.eq(testUser.email)
  });
});
