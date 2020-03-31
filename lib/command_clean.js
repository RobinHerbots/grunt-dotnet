"use strict";

var myCommand = require("./command");
module.exports = new myCommand(
	{
		name: "clean",
		description: "Clean build outputs of a .NET project."
	}, [
		{
			option: "project",
			required: true,
			useAsFlag: false,
			useValue: true
		}
	]);

