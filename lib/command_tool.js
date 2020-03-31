"use strict";

var myCommand = require("./command");
module.exports = new myCommand(
	{
		name: "tool",
		description: "Install or manage tools that extend the .NET experience."
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

