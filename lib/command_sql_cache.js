"use strict";

var myCommand = require("./command");
module.exports = new myCommand(
	{
		name: "sql-cache",
		description: "SQL Server cache command-line tools."
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

