"use strict";

var myCommand = require("./command");
module.exports = new myCommand(
	{
		name: "add",
		description: "Add a package or reference to a .NET project."
	}, [
		{
			option: "project",
			required: true,
			useAsFlag: false,
			useValue: true
		},
		{
			option: "reference",
			flag: "reference",
			useAsFlag: true,
			useValue: true
		},
		{
			option: "package",
			flag: "package",
			useAsFlag: true,
			useValue: true
		},
		{
			option: "version",
			useDasherize: true,
			useValue: true
		},
		{
			option: "framework",
			useDasherize: true,
			useValue: true
		},
		{
			option: "no_restore",
			flag: "--no-restore",
			useValue: false
		},
		{
			option: "source",
			useDasherize: true,
			useValue: true
		},
		{
			option: "package_directory",
			flag: "--package-directory",
			useValue: true
		}
	]);

