const Employee = require("../lib/employee");

describe("Employee", () => {
    it("Can create employee instance", () => {
        const e = new Employee();
        expect(typeof(e)).toBe("object");
    });
    it("Can set name", () => {
        const name = "Averie";
        const e = new Employee(name);
        expect(e.name).toBe(name);
    });
    it("Can set email", () => {
        const testValue = "test@test.com";
        const e = new Employee("Averie", 1, testValue);
        expect(e.email).toBe(testValue);
    });
    it("Can set ID", () => {
        const testValue = 9;
        const e = new Employee("Averie", testValue);
        expect(e.id).toBe(testValue);
    });
    describe("getName", () => {
        it("Can get name via getName()", () => {
            const testValue = "Averie";
            const e = new Employee(testValue);
            expect(e.getName()).toBe(testValue);
        });
    });
    describe("getId", () => {
        it("Can get id via getId()", () => {
            const testValue = 9;
            const e = new Employee("Averie", testValue);
            expect(e.getId()).toBe(testValue);
        });
    });
    describe("getEmail", () => {
        it("Can get email via getEmail()", () => {
            const testValue = "test@test.com";
            const e = new Employee("Averie", 1, testValue);
            expect(e.getEmail()).toBe(testValue);
        });
    });
    describe("getRole", () => {
        it("getRole() should return \"Employee\"", () => {
            const testValue = "Employee";
            const e = new Employee("Averie", 1, "test@test.com");
            expect(e.getRole()).toBe(testValue);
        });
    });
});