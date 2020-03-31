"use strict";

var myCommand = require("./command");
module.exports = new myCommand(
	{
		name: "msbuild",
		description: "Run Microsoft Build Engine (MSBuild) commands."
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

