"use strict";

var myCommand = require("./command");
module.exports = new myCommand(
	{
		name: "add",
		description: "Add a package or reference to a .NET project."
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

