"use strict";

var myCommand = require("./command");
module.exports = new myCommand(
	{
		name: "run",
		description: "Build and run a .NET project output."
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

