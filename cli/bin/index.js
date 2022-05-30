#! /usr/bin/env node
const yargs = require("yargs");
const create = require("./create");

const usage = "\nUsage: aviator new <component>";
const options = yargs.usage(usage).help(true).argv;

switch (options._[0]) {
	case "new":
		create.newComponent(options._[1]);
		break;
	default:
		console.log("Unknown command");
		console.log(usage);
		break;
}
