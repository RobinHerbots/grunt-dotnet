"use strict";

var myCommand = require("./command");
module.exports = new myCommand(
	{
		name: "vstest",
		description: "Run Microsoft Test Engine (VSTest) commands."
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

