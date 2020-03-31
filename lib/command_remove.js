"use strict";

var myCommand = require("./command");
module.exports = new myCommand(
	{
		name: "remove",
		description: "Remove a package or reference from a .NET project."
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

