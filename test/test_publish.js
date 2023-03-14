"use strict";

var command = require("../lib/commands").publish;
var Test = require("./_common");

describe(command.name, function () {
	it("publish", function (done) {
		var options = {
			project: "myProject.csproj",
			output: "outputpath",
			verbosity: "normal",
		};

		new Test(command, options)
			.expect([
				"publish",
				options.project,
				"--output",
				options.output,
				"--verbosity",
				options.verbosity,
			])
			.run(done);
	});
});
