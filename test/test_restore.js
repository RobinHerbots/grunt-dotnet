"use strict";

var command = require("../lib/commands").restore;
var Test = require("./_common");

describe(command.name, function () {
	it("restore", function (done) {
		var options = {
			project: "mySolution.slm",
			source: ["source1", "source2"]
		};

		new Test(command, options)
			.expect(["restore", options.project, "--source", options.source[0], "--source", options.source[1]])
			.run(done);
	});

	it("restore single source", function (done) {
		var options = {
			project: "mySolution.slm",
			source: "source1"
		};

		new Test(command, options)
			.expect(["restore", options.project, "--source", options.source])
			.run(done);
	});
});
