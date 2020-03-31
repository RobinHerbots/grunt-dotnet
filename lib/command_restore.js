"use strict";

var myCommand = require("./command");
module.exports = new myCommand(
	{
		name: "restore",
		description: "Restore dependencies specified in a .NET project."
	}, [
		{
			option: "project",
			required: true,
			useAsFlag: false,
			useValue: true
		}
	], (tasks, args) => {
		if (tasks.data.options && tasks.data.options.source) {
			if (!Array.isArray(tasks.data.options.source))
				tasks.data.options.source = [tasks.data.options.source];
			tasks.data.options.source.forEach((src, ndx) => {
				args.push("--source");
				args.push(src);
			});
		}

	});

