"use strict";

var grunt = require("grunt"),
	ArgUtil = require("flopmang");

module.exports = function (command, argUtilOptions, customCB) {
	var commandFn = function (task, exec, done) {
		var options = task.options({}),
			argUtil = new ArgUtil(task, argUtilOptions);

		function handleResult(err, result) {
			if (err) {
				grunt.fail.fatal("Error running dotnet_" + command.name);
				return;
			}

			if (typeof options.callback === "function") {
				options.callback(result.stdout);
			}
			done();
		}

		var args = [command.name].concat(argUtil.getArgFlags());
		if(customCB) {
			customCB(...[task, args]);
		}

		args.push(handleResult);
		exec.apply(this, args);
	};
	commandFn.description = command.description;

	return commandFn;
};
