const chai = require('chai');
var expect = chai.expect;

const business = require('../src/commands/business')
const  Businesses  = require('../src/queries/business-storage-info')
const  clearTable  = require('./helpers')

describe('Business', function () {
    afterEach(async function(){
        await clearTable.clearTable('business')
    })


    const testBusiness = {
      businessName: "FakeBusinessname",
      phoneNumbers: "Fakenumber",
      email: "Fake@fake.com"
    }
    
  it('Should be able to save a new user to the database', async function () {
    const id = await business.saveBusiness(testBusiness)
    console.log(id);

    expect(id).to.be.gt(0)
  });

  it('Should be able to get a user by name from the database', async function(){
      const businesses = await Businesses.getStorageInfo()

      // expect(businesses.name).to.eq(testUser.businessName)
      // expect(businesses.contact_number).to.eq(testUser.phoneNumbers)
      // expect(businesses.contact_email).to.eq(testUser.email)
      })
});


