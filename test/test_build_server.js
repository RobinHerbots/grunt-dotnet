"use strict";

var command = require("../lib/commands").build_server;
var Test = require("./_common");

describe(command.name, function () {
	it("build_server shutdown --msbuild", function (done) {
		var options = {
			shutdown: true,
			msbuild: true
		};

		new Test(command, options)
			.expect(["build-server", "shutdown", "--msbuild"])
			.run(done);
	});
	it("build_server shutdown --vbcscompiler", function (done) {
		var options = {
			shutdown: true,
			vbcscompiler: true
		};

		new Test(command, options)
			.expect(["build-server", "shutdown", "--vbcscompiler"])
			.run(done);
	});
	it("build_server shutdown --razor", function (done) {
		var options = {
			shutdown: true,
			razor: true
		};

		new Test(command, options)
			.expect(["build-server", "shutdown", "--razor"])
			.run(done);
	});
});
