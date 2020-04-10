const request = require("supertest");
const app = require("../../server");

describe("Test Authentication", () => {
  test("it should return Unauthorized on GET", (done) => {
    request(app)
      .get("/check-auth")
      .then((res) => {
        expect(res.status).toBe(401);
        done();
      });
  });
});
