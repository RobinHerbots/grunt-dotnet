"use strict";

var command = require("../lib/commands").build;
var Test = require("./_common");

describe(command.name, function () {
	it("build", function (done) {
		var options = {
			project: "mySolution.slm",
		};

		new Test(command, options)
			.expect(["build", options.project])
			.run(done);
	});
});
