const Engineer = require("../lib/engineer");

describe("Engineer", () => {
    it("Can set github account via constructor", () => {
        const testValue = "averiebeltran";
        const e = new Engineer("Averie", 1, "test@test.com", testValue);
        expect(e.github).toBe(testValue);
    });
    describe("getGithub", () => {
        it("Get github username from getGithub()", () => {
            const testValue = "averiebeltran";
            const e = new Engineer("Averie", 1, "test@test.com", testValue);
            expect(e.getGithub()).toBe(testValue);
        });
    });
    describe("getRole", () => {
        it("getRole() should return \"Engineer\"", () => {
            const testValue = "Engineer";
            const e = new Engineer("Averie", 1, "test@test.com", testValue);
            expect(e.getRole()).toBe(testValue);
        });
    });
});