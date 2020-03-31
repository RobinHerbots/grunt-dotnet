"use strict";

var myCommand = require("./command");
module.exports = new myCommand(
	{
		name: "restore",
		description: "Restore dependencies specified in a .NET project."
	}, [
		{
			option: "project",
			required: true,
			useAsFlag: false,
			useValue: true
		}
	]);

