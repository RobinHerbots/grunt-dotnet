"use strict";

var myCommand = require("./command");
module.exports = new myCommand(
	{
		name: "dev-certs",
		description: "Create and manage development certificates."
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

