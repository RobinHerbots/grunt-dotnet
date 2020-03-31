"use strict";

var myCommand = require("./command");
module.exports = new myCommand(
	{
		name: "nuget",
		description: "Provides additional NuGet commands"
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

