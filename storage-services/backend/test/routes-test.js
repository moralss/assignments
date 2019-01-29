var chai = require("chai");
var expect = chai.expect;
// request = require("supertest");
var { app } = require("../app.js");
var chaiHttp = require("chai-http");
chai.use(chaiHttp);
const { clearTable } = require("./helpers");
// chai.request(server)
//   .get('/something')
//   .set('authorization', 'bearer ${JWT}')
//   .end(function(err, res) {
//   });

describe("API Integration Tests", async function() {
  afterEach(async function() {
    await clearTable("blocks");
    await clearTable("locations");
    await clearTable("businesses");
    await clearTable("business_owners");
  });
  // describe("#GET /business ", function() {
  //   it("should get all business", function(done) {
  //     request(app)
  //       .get("/business")
  //       .end(function(err, res) {
  //           console.log(err);
  //           console.log(res);
  //         expect(res.statusCode).to.equal(200);
  //         expect(res.body).to.be.an("array");
  //       });
  //         expect(res.body).to.be.empty;
  //         done();
  //   });
  // });

  describe("##User ", function() {
    it("A user can successfully sign in ", function(done) {
      chai
        .request(app)
        .post("/businessownersign")
        .send({
          userName: "moral",
          email: "jeramoral@gmail.com",
          password: "moral",
          confirmPassword: "moral"
        })
        .end(function(err, res) {
          expect(res).to.have.status(201);
          console.log(err);
          done(); // <= Call done to signal callback end
        });
    });

    it.only("A user can successfully login in ", function(done) {
      chai
        .request(app)
        .post("/businessownersign")
        .send({
          userName: "moral",
          email: "moral@gmail.com",
          password: "moral",
          confirmPassword: "moral"
        })
        .end(function(err, res) {
          console.log(err);
          console.log(res)
          done();
        })
      chai

        .post("/businessownerlogin")
        .send({
          email: "moral@gmail.com",
          password: "moral"
        })
        .end(function(err, res) {
          console.log(res);
          expect(res).to.have.status(201);
          done();
        });
    });
  });
});
