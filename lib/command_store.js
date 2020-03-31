"use strict";

var myCommand = require("./command");
module.exports = new myCommand(
	{
		name: "store",
		description: "Store the specified assemblies in the runtime package store."
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

