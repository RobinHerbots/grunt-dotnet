"use strict";

var command = require("../lib/commands").restore;
var Test = require("./_common");

describe(command.name, function () {
	it("restore", function (done) {
		var options = {
			project: "mySolution.slm"
		};

		new Test(command, options)
			.expect(["restore", options.project])
			.run(done);
	});
});
