const chai = require("chai");
var expect = chai.expect;

const { saveLocation } = require("../src/commands/location");
const { saveBusiness } = require("../src/commands/business");
const { getLocation } = require("../src/queries/location");
const {getBusinesses} = require("../src/queries/business");

const { clearTable } = require("./helpers");

describe("Business", function() {
  afterEach(async function() {
    await clearTable("location");
    await clearTable("business");
  });

  const test = {
    businessName: "bkebbngname",
    phoneNumbers: "bbbggggmer",
    email: "Fbgfcobbm"
  };

  describe("Database commands ", () => {
    it.only("Should be able to save a new business to the database", async function() {
      const businessId = await createFakeBusiness(test);
      expect(businessId).to.be.gt(0);
    });

    it.only("Should be able to save a location for a business", async function() {
      const businessId = await createFakeBusiness(test);
      const { id } = await createFakeLocation(businessId);
      expect(id).to.be.gt(0);
    });
  });

  describe("Database queries", () => {
    it.only("Should be able to query locations for business", async function() {
      const businessId = await createFakeBusiness(test);
      const fakeLocation = await createFakeLocation(businessId);
      const locations = await getLocation("bkebbngname");
      const firstLocation = locations[0];

      expect(firstLocation.street).to.eq(fakeLocation.street);
      expect(firstLocation.city).to.eq(fakeLocation.city);
      expect(firstLocation.state).to.eq(fakeLocation.state);
    });

    it.only("Should be able to query business", async function() {
      await createFakeBusiness(test);
      const businesses = await getBusinesses();

      const firstBusiness = businesses[0];

      expect(firstBusiness.street).to.eq(test.street);
      expect(firstBusiness.city).to.eq(test.city);
      expect(firstBusiness.state).to.eq(test.state);

    });
  });
});


const createFakeBusiness = async business => {
  const id = await saveBusiness(business);
  return id;
};

const createFakeLocation = async businessId => {
  const locationInfo = {
    street: "knb",
    state: "santbn",
    city: "paradabies",
    id: businessId
  };

  let id = await saveLocation(locationInfo);
  return { ...locationInfo, id };
};
