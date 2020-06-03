"use strict";

var myCommand = require("./command"),
	escape = require("./escapeSpecialChars");

module.exports = new myCommand(
	{
		name: "msbuild",
		description: "Run Microsoft Build Engine (MSBuild) commands."
	}, [
		{
			option: "project",
			useAsFlag: false,
			useValue: true
		},
		{
			option: "target",
			customFlagFn: function (arg) {
				return arg.value ? `-target:${Array.isArray(arg.value) ? arg.value.join(";") : arg.value}` : null;
			}
		},
		{
			option: "property",
			customFlagFn: function (arg) {
				if (arg.value) {
					var properties = Object.keys(arg.value).map(function (key) {
						if(key === "Password" && arg.value[key] !== null) {
							return key + "=" + escape(arg.value[key]);
						}
						return key + "=" + arg.value[key];
					});
					return `-property:${properties.join(";")}`;
				}
				return null;
			}
		}, {
			option: "verbosity",
			customFlagFn: function (arg) {
				return arg.value ? `-verbosity:${arg.value}` : "-verbosity:quiet";
			}
		}
	]);

