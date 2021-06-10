const Intern = require("../lib/intern");

describe("Intern", () => {
    it("Can set school via constructor", () => {
        const testValue = "Duke";
        const e = new Intern("Averie", 1, "test@test.com", testValue);
        expect(e.school).toBe(testValue);
    });
    describe("getSchool", () => {
        it("Get school from getSchooll()", () => {
            const testValue = "averiebeltran";
            const e = new Intern("Averie", 1, "test@test.com", testValue);
            expect(e.getSchool()).toBe(testValue);
        });
    });
    describe("getRole", () => {
        it("getRole() should return \"Intern\"", () => {
            const testValue = "Intern";
            const e = new Intern("Averie", 1, "test@test.com", testValue);
            expect(e.getRole()).toBe(testValue);
        });
    });
});