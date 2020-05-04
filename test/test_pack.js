"use strict";

var command = require("../lib/commands").pack;
var Test = require("./_common");

describe(command.name, function () {
	it("pack", function (done) {
		var options = {
			project: "mySolution.slm",
		};

		new Test(command, options)
			.expect(["pack", options.project])
			.run(done);
	});
});
