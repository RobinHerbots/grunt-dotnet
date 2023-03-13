"use strict";

var myCommand = require("./command");
module.exports = new myCommand(
	{
		name: "publish",
		description: "Publish a .NET project for deployment.",
	},
	[
		{
			option: "project",
			required: true,
			useAsFlag: false,
			useValue: true
		},
		{
			option: "use_current_runtime",
			flag: "--use-current-runtime",
			useValue: false
		},
		{
			option: "output",
			useDasherize: true,
			useValue: true
		},
		{
			option: "manifest",
			useDasherize: true,
			useValue: true
		},
		{
			option: "no_build",
			flag: "--no-build",
			useValue: false
		},
		{
			option: "self_contained",
			flag: "--self-contained",
			useValue: false
		},
		{
			option: "no_self_contained",
			flag: "--no-self-contained",
			useValue: false
		},
		{
			option: "nologo",
			useDasherize: true,
			useValue: false
		},
		{
			option: "framework",
			useDasherize: true,
			useValue: true
		},
		{
			option: "runtime",
			useDasherize: true,
			useValue: true
		},
		{
			option: "configuration",
			useDasherize: true,
			useValue: true
		},
		{
			option: "version_suffix",
			flag: "--version-suffix",
			useValue: true
		},
		{
			option: "interactive",
			useDasherize: true,
			useValue: false
		},
		{
			option: "no_restore",
			flag: "--no-restore",
			useValue: false
		},
		{
			option: "verbosity",
			useDasherize: true,
			useValue: true
		},
		{
			option: "arch",
			useDasherize: true,
			useValue: true,
		},
		{
			option: "os",
			useDasherize: true,
			useValue: true,
		},
		{
			option: "disable_build_servers",
			flag: "--disable-build-servers",
			useValue: false,
		},
	]
);
