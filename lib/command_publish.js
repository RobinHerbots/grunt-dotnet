"use strict";

var myCommand = require("./command");
module.exports = new myCommand(
	{
		name: "publish",
		description: "Publish a .NET project for deployment."
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

