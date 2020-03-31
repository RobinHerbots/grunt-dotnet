"use strict";

var myCommand = require("./command");
module.exports = new myCommand(
	{
		name: "new",
		description: "Create a new .NET project or file."
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

