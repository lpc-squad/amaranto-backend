const request = require("supertest");
const app = require("../../server");

describe("Test Authentication", () => {
  test("it should return Unauthorized on GET", () => {
    return request(app).get("/check-auth").expect(401);
  });
});
