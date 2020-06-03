"use strict";

var command = require("../lib/commands").msbuild;
var Test = require("./_common");

describe(command.name, function () {
	it("msbuild", function (done) {
		var options = {
			project: "myProject.csproj",
			target: ["Clean", "Rebuild"],
			property: {
				OutputPath: "build",
				WarningLevel: 2,
				PublishProfile: "Staging",
				PackageVersion: "1.0.0",
				FileVersion: "1.0.0",
				Version: "1.0.0",
				AssemblyVersion: "1.0.0"
			},
			verbosity: "normal"
		};

		new Test(command, options)
			.expect(["msbuild", options.project, `-target:${options.target.join(";")}`, "-property:OutputPath=build;WarningLevel=2;PublishProfile=Staging;PackageVersion=1.0.0;FileVersion=1.0.0;Version=1.0.0;AssemblyVersion=1.0.0", `-verbosity:${options.verbosity}`])
			.run(done);
	});

	it("msbuild escape special chars in password", function (done) {
		var options = {
			project: "myProject.csproj",
			target: ["Clean", "Rebuild"],
			property: {
				OutputPath: "build",
				WarningLevel: 2,
				PublishProfile: "Staging",
				Password: "he%ACg8gb$TUh2&6&",
				PackageVersion: "1.0.0",
				FileVersion: "1.0.0",
				Version: "1.0.0",
				AssemblyVersion: "1.0.0"
			},
			verbosity: "normal"
		};

		new Test(command, options)
			.expect(["msbuild", options.project, `-target:${options.target.join(";")}`, "-property:OutputPath=build;WarningLevel=2;PublishProfile=Staging;Password=he%25ACg8gb%24TUh2%266%26;PackageVersion=1.0.0;FileVersion=1.0.0;Version=1.0.0;AssemblyVersion=1.0.0", `-verbosity:${options.verbosity}`])
			.run(done);
	});
});
