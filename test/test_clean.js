"use strict";

var command = require("../lib/commands").clean;
var Test = require("./_common");

describe(command.name, function () {
	it("clean", function (done) {
		var options = {
			project: "mySolution.slm",
		};

		new Test(command, options)
			.expect(["clean", options.project])
			.run(done);
	});
});
