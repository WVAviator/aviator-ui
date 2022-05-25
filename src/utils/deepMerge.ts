export type RecursivePartial<T> = {
	[P in keyof T]?: RecursivePartial<T[P]>;
};

export default function deepMerge<T>(
	target: T,
	partial: RecursivePartial<T> | undefined
) {
	if (!partial || typeof partial !== "object") return partial || target;

	const output = Object.assign({}, target) as T;

	(Object.keys(partial) as (keyof typeof partial)[]).forEach(key => {
		output[key] = deepMerge(output[key], partial[key]);
	});

	return output;
}
