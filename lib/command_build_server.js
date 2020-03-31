"use strict";

var myCommand = require("./command");
module.exports = new myCommand(
	{
		name: "build-server",
		description: "Interact with servers started by a build."
	}, [
		{
			option: "shutdown",
			useAsFlag: true,
			useDasherize: false
		}, {
			option: "msbuild",
			useAsFlag: true
		}, {
			option: "vbcscompiler",
			useAsFlag: true
		}, {
			option: "razor",
			useAsFlag: true
		}
	]);

