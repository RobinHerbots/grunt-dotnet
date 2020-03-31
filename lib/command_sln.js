"use strict";

var myCommand = require("./command");
module.exports = new myCommand(
	{
		name: "sln",
		description: "Modify Visual Studio solution files."
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

