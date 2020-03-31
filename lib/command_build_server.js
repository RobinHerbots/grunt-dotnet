"use strict";

var myCommand = require("./command");
module.exports = new myCommand(
	{
		name: "build-server",
		description: "Interact with servers started by a build."
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

