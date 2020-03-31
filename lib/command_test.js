"use strict";

var myCommand = require("./command");
module.exports = new myCommand(
	{
		name: "test",
		description: "Run unit tests using the test runner specified in a .NET project."
	}, [
		{
			option: "name",
			defaultValue: null,
			useAsFlag: true,
			useValue: true,
			useDasherize: false,
			flag: "-Name",
			required: true
		}
	]);

