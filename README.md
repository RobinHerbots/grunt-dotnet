# grunt-dotnet

> Grunt integration for Powershell WebAppPool commands.

## Getting Started
This plugin requires Grunt `~0.4.5`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-dotnet --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-dotnet');
```

## The "dotnet_add" task
Add a package or reference to a .NET project.
### Overview
In your project's Gruntfile, add a section named `dotnet_add` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  dotnet_add: {
    your_target: {
        options: {
            project: "project | solution",
            reference: "referenceProject", 
            package: "NugetPackage",
            version: "1.0.0",
            no_restore: true,
            package_directory: "package_directory",
            source: "nugetsource",
            framework: "dotnetcore3.1"
        }
    },
  },
});
 ```
### Options
#### options.project  
Type: String  
Default: ""

The project file to operate on. If a file is not specified, the command will search the current directory for one.

#### options.reference
Type: String  
Default: null

The paths to the projects to add as references.

##### options.framework
Type: String  
Default: null

Add the reference only when targeting a specific framework.

#### options.package
Type: String  
Default: null

The package reference to add.

##### options.version
Type: String  
Default: null

The version of the package to add.

##### options.framework
Type: String  
Default: null

Add the reference only when targeting a specific framework.

##### options.no_restore
Type: Boolean  
Default: false

Add the reference without performing restore preview and compatibility check.

##### options.source
Type: String  
Default: null

The NuGet package source to use during the restore.

## The "dotnet_build" task
Build a .NET project.
### Overview
In your project's Gruntfile, add a section named `dotnet_build` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  dotnet_build: {
    your_target: {
        options: {
            project: "project | solution",
        }
    },
  },
});
 ```
### Options
#### options.project  
Type: String  
Default: ""
  
The project or solution file to operate on. If a file is not specified, the command will search the current directory for one.

## The "dotnet_build_server" task
Interact with servers started by a build.
### Overview
In your project's Gruntfile, add a section named `dotnet_build_server` to the data object passed into `grunt.initConfig()`.
  
```js
grunt.initConfig({
  dotnet_build_server: {
    your_target: {
        options: {
            shutdown: true,
            msbuild: true,
            vbcscompiler: false,
            razor: true 
        }
    },
  },
});
```
### Options
#### options.shutdown
Type: boolean  
Default: false

Shuts down build servers that are started from dotnet. By default, all servers are shut down.

##### options.msbuild
Type: boolean  
Default: false

Shut down the MSBuild build server.

##### options.vbcscompiler
Type: boolean  
Default: false

Shut down the VB/C# compiler build server.

##### options.razor
Type: boolean  
Default: false

Shut down the Razor build server.



## The "dotnet_clean" task
Clean build outputs of a .NET project.

### Overview
In your project's Gruntfile, add a section named `dotnet_clean` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  dotnet_clean: {
    your_target: {
        options: {
            project: "project | solution",
        }
    },
  },
});
 ```
### Options
#### options.project  
Type: String  
Default: ""
  
The project or solution file to operate on. If a file is not specified, the command will search the current directory for one.

## The "dotnet_dev_certs" task
Create and manage development certificates.

### Overview
In your project's Gruntfile, add a section named `dotnet_dev_certs` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  dotnet_dev_certs: {
    your_target: {
        options: {
        
        }
    },
  },
});
```
### Options

## The "dotnet_fsi" task
Start F# Interactive / execute F# scripts.

### Overview
In your project's Gruntfile, add a section named `dotnet_fsi` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  dotnet_fsi: {
    your_target: {
        options: {
        
        }
    },
  },
});
```
### Options

## The "dotnet_msbuild" task
Run Microsoft Build Engine (MSBuild) commands.
  
### Overview
In your project's Gruntfile, add a section named `dotnet_msbuild` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  dotnet_msbuild: {
    your_target: {
        options: {
            project: "project | solution",
            target: ["Clean", "Rebuild"],
            property: {
                OutputPath: "build",
                WarningLevel: 2,
                PublishProfile: "Staging",
                PackageVersion: "1.0.0",
                FileVersion: "1.0.0",
                Version: "1.0.0",
                AssemblyVersion: "1.0.0"            
                ...
            },
            verbosity: minimal   
        }
    },
  },
});
 ```
### Options
#### options.project  
Type: String  
Default: ""
  
Builds the specified targets in the project file. If
a project file is not specified, MSBuild searches the
current working directory for a file that has a file
extension that ends in "proj" and uses that file.  If
a directory is specified, MSBuild searches that
directory for a project file.

#### options.target  
Type: String[]  
Default: null

Build these targets in this project.

#### options.property
Type: Object  
Default: null

Set or override these project-level properties.

#### options.verbosity
Type: String  
Default: "quiet"

Display this amount of information in the event log.
The available verbosity levels are: q[uiet], m[inimal], n[ormal], d[etailed], and diag[nostic].

## The "dotnet_new" task
Create a new .NET project or file.
  
### Overview
In your project's Gruntfile, add a section named `dotnet_new` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  dotnet_new: {
    your_target: {
        options: {
        
        }
    },
  },
});
```
### Options

## The "dotnet_nuget" task
Provides additional NuGet commands.
  
### Overview
In your project's Gruntfile, add a section named `dotnet_nuget` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  dotnet_nuget: {
    your_target: {
        options: {
        
        }
    },
  },
});
```
### Options

## The "dotnet_pack" task
Create a NuGet package.
  
### Overview
In your project's Gruntfile, add a section named `dotnet_pack` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  dotnet_pack: {
    your_target: {
        options: {
        
        }
    },
  },
});
```
### Options

## The "dotnet_publish" task
Publish a .NET project for deployment.
  
### Overview
In your project's Gruntfile, add a section named `dotnet_publish` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  dotnet_publish: {
    your_target: {
        options: {
        
        }
    },
  },
});
```
### Options

## The "dotnet_remove" task
Remove a package or reference from a .NET project.
  
### Overview
In your project's Gruntfile, add a section named `dotnet_remove` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  dotnet_remove: {
    your_target: {
        options: {
        
        }
    },
  },
});
```
### Options

## The "dotnet_restore" task
Restore dependencies specified in a .NET project.
  
### Overview
In your project's Gruntfile, add a section named `dotnet_restore` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  dotnet_restore: {
    your_target: {
        options: {
            project: "project | solution",
            source: [nuget package sources]
        }
    },
  },
});
```
### Options
#### options.project  
Type: String  
Default: ""
 
The project or solution file to operate on. If a file is not specified, the command will search the current directory for one.
 
#### options.source
Type: string || string[]  
Default: null
 
The NuGet package source(s) to use for the restore.

## The "dotnet_run" task
Build and run a .NET project output.
  
### Overview
In your project's Gruntfile, add a section named `dotnet_run` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  dotnet_run: {
    your_target: {
        options: {
        
        }
    },
  },
});
```
### Options

## The "dotnet_sln" task
Modify Visual Studio solution files.
  
### Overview
In your project's Gruntfile, add a section named `dotnet_sln` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  dotnet_sln: {
    your_target: {
        options: {
        
        }
    },
  },
});
```
### Options

## The "dotnet_sql_cache" task
SQL Server cache command-line tools.

### Overview
In your project's Gruntfile, add a section named `dotnet_sql_cache` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  dotnet_sql_cache: {
    your_target: {
        options: {
        
        }
    },
  },
});
```
### Options

## The "dotnet_store" task
Store the specified assemblies in the runtime package store.
  
### Overview
In your project's Gruntfile, add a section named `dotnet_store` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  dotnet_store: {
    your_target: {
        options: {
        
        }
    },
  },
});
```
### Options

## The "dotnet_test" task
Run unit tests using the test runner specified in a .NET project.
  
### Overview
In your project's Gruntfile, add a section named `dotnet_test` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  dotnet_test: {
    your_target: {
        options: {
        
        }
    },
  },
});
```
### Options

## The "dotnet_tool" task
Install or manage tools that extend the .NET experience.
  
### Overview
In your project's Gruntfile, add a section named `dotnet_tool` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  dotnet_tool: {
    your_target: {
        options: {
        
        }
    },
  },
});
```
### Options

## The "dotnet_vstest" task
Run Microsoft Test Engine (VSTest) commands.
  
### Overview
In your project's Gruntfile, add a section named `dotnet_vstest` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  dotnet_vstest: {
    your_target: {
        options: {
        
        }
    },
  },
});
```
### Options

## The "dotnet_user_secrets" task
Manage development user secrets.
### Overview
In your project's Gruntfile, add a section named `dotnet_user_secrets` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  dotnet_add: {
    your_target: {
        options: {
        
        }
    },
  },
});
```
### Options

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
_(Nothing yet)_
