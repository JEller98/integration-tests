import app from "./../src/app";
import request from "supertest";

describe("Products endpoint", () => {
    test("should be available", async () => {
        //don't need to worry about ports, shoutouts to supertest
        const response = await request(app)
        .get("/api/v1/products")
        .expect(200);
    });
    
    test("should return the correct data", async () => {
        const response = await request(app)
        .get("/api/v1/products")
        .expect(200);
    
        expect(response.body.status).toBe("success");
        expect(response.body.data).toEqual([
            {id: 1, name: "Iphone"},
            {id: 2, name: "Car"}
        ]);
    });
});

//etc...
describe("Users endpoint", () => {
    test("should be accessible", () => {});
});