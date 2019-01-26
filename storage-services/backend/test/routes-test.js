var chai = require("chai");
var expect = chai.expect;
request = require("supertest");
var {app} = require("../app.js");
// console.log(app)
// var chaiHttp = require("chai-http");
// chai.use(chaiHttp); /** use the chai-http plugin **/

describe("API Integration Tests", function() {
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

  describe("## Create task ", function() {
    it("should create a task", function(done) {
      request(app)
        .get("/business")
        .expect(200)
        .expect("/hello/" , done)
    });
  });
});

//   });