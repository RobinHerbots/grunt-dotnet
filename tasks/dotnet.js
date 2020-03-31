"use strict";
var commands = require("../lib/commands");

module.exports = function (grunt) {
	function wrapCommand(fn) {
		return function () {
			var self = this;

			function exec() {
				var args = Array.prototype.slice.call(arguments);
				var callback = args.pop();
				var options = self.options({
					verbose: grunt.option("verbose"),
					dryRun: grunt.option("no-write") || grunt.option("dry-run")
				});
				var spawnOpts = {};

				//build spawn options based on task options
				if (options.cwd) {
					//verify that the specified cwd exists
					if (grunt.file.isDir(options.cwd)) {
						spawnOpts.cwd = options.cwd;
					} else {
						throw new Error("The specified cwd does not exist: \"" + options.cwd + "\"");
					}
				}
				if (options.verbose) {
					spawnOpts.stdio = "inherit";
				}

				if (grunt.option("no-write") || grunt.option("dry-run") || options.dryRun) {
					grunt.log.write("dotnet " + args.join(" "));
					done();
				} else {
					grunt.util.spawn({
						cmd: "dotnet",
						args: args,
						opts: spawnOpts
					}, function () {
						callback.apply(this, arguments);
					});
				}
			}

			var done = self.async();
			fn(self, exec, done);
		};
	}

	for (var command in commands) {
		var fn = commands[command];
		grunt.registerMultiTask("dotnet_" + command, fn.description || "", wrapCommand(fn));
	}
};
