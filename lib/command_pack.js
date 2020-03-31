"use strict";

var myCommand = require("./command");
module.exports = new myCommand(
	{
		name: "pack",
		description: "Create a NuGet package."
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

