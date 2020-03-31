"use strict";

var myCommand = require("./command");
module.exports = new myCommand(
	{
		name: "clean",
		description: "Clean build outputs of a .NET project."
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

