"use strict";

var command = require("../lib/commands").add;
var Test = require("./_common");

describe(command.name, function () {
	it("add reference", function (done) {
		var options = {
			project: "myProject.csproj",
			reference: "myreferenceProject.csproj"
		};

		new Test(command, options)
			.expect(["add", options.project, "reference", options.reference])
			.run(done);
	});

	it("add package", function (done) {
		var options = {
			project: "myProject.csproj",
			package: "NugetPackage",
			version: "1.0.0",
			no_restore: true,
			package_directory: "package_directory",
			source: "nugetsource",
			framework: "dotnetcore3.1"
		};

		new Test(command, options)
			.expect(["add",
				options.project,
				"package",
				options.package,
				"--version", options.version,
				"--framework", options.framework,
				"--no-restore",
				"--source", options.source,
				"--package-directory", options.package_directory])
			.run(done);
	});
});
