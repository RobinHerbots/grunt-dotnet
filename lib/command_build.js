"use strict";

var myCommand = require("./command");
module.exports = new myCommand(
	{
		name: "build",
		description: "Build a .NET project."
	}, [
		{
			option: "project",
			required: true,
			useAsFlag: false,
			useValue: true
		}
	]);

