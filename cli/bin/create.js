const path = require("path");
const fs = require("fs");

function newComponent(name) {
	const componentsFolderPath = path.join(process.cwd(), "src", "components");
	console.log(`Creating new component: ${name} in ${componentsFolderPath}`);

	//components/index.ts
	const indexFilePath = path.join(componentsFolderPath, "index.ts");
	if (!fs.existsSync(indexFilePath)) {
		fs.writeFileSync(indexFilePath, `export { default } from "./${name}";`);
	} else {
		fs.appendFileSync(
			indexFilePath,
			`\nexport { default as ${name} } from "./${name}";`
		);
	}
	console.log("\tcomponents/index.ts updated...");

	//components/Component/
	const componentDirectory = path.join(componentsFolderPath, name);
	fs.mkdirSync(componentDirectory);
	console.log(`\tcomponents/${name}/ directory created...`);

	//components/Component/index.ts
	const indexPath = path.join(componentDirectory, "index.ts");
	fs.writeFileSync(indexPath, `export { default } from "./${name}";`);
	console.log(`\tcomponents/${name}/index.ts created...`);

	//components/Component/Component.tsx
	const componentFilePath = path.join(componentDirectory, `${name}.tsx`);
	fs.writeFileSync(componentFilePath, getMainFileContents(name));
	console.log(`\tcomponents/${name}/${name}.tsx created...`);

	//components/Component/Component.css.ts
	const cssFilePath = path.join(componentDirectory, `${name}.css.ts`);
	fs.writeFileSync(cssFilePath, getCssFileContents(name));
	console.log(`\tcomponents/${name}/${name}.css.ts created...`);

	//components/Component/Component.stories.tsx
	const storiesFilePath = path.join(
		componentDirectory,
		`${name}.stories.tsx`
	);
	fs.writeFileSync(storiesFilePath, getStoriesFileContents(name));
	console.log(`\tcomponents/${name}/${name}.stories.tsx created...`);

	//components/Component/Component.test.tsx
	const testFilePath = path.join(componentDirectory, `${name}.test.tsx`);
	fs.writeFileSync(testFilePath, getTestFileContents(name));
	console.log(`\tcomponents/${name}/${name}.test.tsx created...`);
}

function getMainFileContents(name) {
	return `/** @jsxImportSource @emotion/react */
import React from "react";
import { Theme } from "@emotion/react";
import use${name}Styles from "./${name}.css";

export interface ${name}Props {
	color?: keyof Theme["colors"];
}

const ${name}: React.FC<${name}Props> = ({ color = "primary" }) => {
	const { baseStyle } = use${name}Styles(color);

	return (
		<div css={baseStyle}>
			${name}
		</div>
	);
};

export default ${name};
	`;
}

function getCssFileContents(name) {
	return `import { css, Theme } from "@emotion/react";
import { useMemo } from "react";
import { useTheme } from "../../theme";

const use${name}Styles = (color: keyof Theme["colors"]) => {
	const theme = useTheme();

	const baseStyle = useMemo(() => {
		return css\`
			background-color: \${theme.colors[color]};
			width: 100px;
			height: 100px;
		\`;
	}, [theme]);
	
	return { baseStyle };
};

export default use${name}Styles;
	`;
}

function getStoriesFileContents(name) {
	return `import { Meta, Story } from "@storybook/react";
import React from "react";
import ${name}, { ${name}Props } from "./${name}";

const meta: Meta = {
	title: "${name}",
	component: ${name},
	argTypes: {},
};

export default meta;

const Template: Story<${name}Props> = (args) => <${name} {...args} />;

export const Default = Template.bind({});

Default.args = {};
	`;
}

function getTestFileContents(name) {
	return `import { render, screen } from "@testing-library/react";
import React from "react";
import ${name} from "./${name}";
import "@testing-library/jest-dom";

describe("${name} component", () => {
	it("should render on the screen", () => {
		render(<${name} />);
		const element = screen.getByText("${name}");
		expect(element).toBeInTheDocument();
	});
});
	`;
}

module.exports = { newComponent: newComponent };
