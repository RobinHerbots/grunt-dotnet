"use strict";

var myCommand = require("./command");
module.exports = new myCommand(
	{
		name: "user-secrets",
		description: "Manage development user secrets."
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

