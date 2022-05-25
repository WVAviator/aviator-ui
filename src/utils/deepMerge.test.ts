import { RecursivePartial } from "../types";
import deepMerge from "./deepMerge";

describe("deepMerge", () => {
	interface TestObject {
		a: string;
		b: {
			c: string;
			d: {
				e: string;
				f: string;
			};
		};
	}

	const target: TestObject = {
		a: "a",
		b: {
			c: "c",
			d: {
				e: "e",
				f: "f",
			},
		},
	};

	it("successfully merges a partial object into a full object", () => {
		const partial: RecursivePartial<TestObject> = {
			a: "a-modified",
			b: {
				d: {
					f: "f-modified",
				},
			},
		};

		const output = deepMerge(target, partial);

		expect(output).toEqual({
			a: "a-modified",
			b: {
				c: "c",
				d: {
					e: "e",
					f: "f-modified",
				},
			},
		});
	});

	it("handles an accidental partial with an empty object", () => {
		interface TestObject {
			a: string;
			b: {
				c: string;
				d: {
					e: string;
					f: string;
				};
			};
		}

		const target: TestObject = {
			a: "a",
			b: {
				c: "c",
				d: {
					e: "e",
					f: "f",
				},
			},
		};

		const partial: RecursivePartial<TestObject> = {
			a: "a-modified",
			b: {
				d: {},
			},
		};

		const output = deepMerge(target, partial);

		expect(output).toEqual({
			a: "a-modified",
			b: {
				c: "c",
				d: {
					e: "e",
					f: "f",
				},
			},
		});
	});
});
