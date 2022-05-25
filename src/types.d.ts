export { RecursivePartial } from "./utils/deepMerge";
export { Theme } from "@emotion/react";
import "react";

declare module "react" {
	interface Attributes {
		css?: Interpolation<Theme>;
	}
}
