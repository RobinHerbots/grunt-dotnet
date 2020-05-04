"use strict";

var myCommand = require("./command");
module.exports = new myCommand(
	{
		name: "pack",
		description: "Create a NuGet package."
	}, [
		{
			option: "project",
			required: true,
			useAsFlag: false,
			useValue: true
		}
	]);

