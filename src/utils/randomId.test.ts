import randomId from "./randomId";

describe("randomId", () => {
	it("should generate a new random ID each time it is called", () => {
		const randomId1 = randomId();
		const randomId2 = randomId();

		expect(randomId1).not.toBe(randomId2);
	});

	it("should allow an argument for length", () => {
		const randomId7 = randomId(7);
		expect(randomId7.length).toBe(7);

		const randomId2 = randomId(2);
		expect(randomId2.length).toBe(2);
	});
});
