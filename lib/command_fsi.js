"use strict";

var myCommand = require("./command");
module.exports = new myCommand(
	{
		name: "fsi",
		description: "Start F# Interactive / execute F# scripts."
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

