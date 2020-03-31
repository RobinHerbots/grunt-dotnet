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
        
        }
    },
  },
});
```
### Options

## The "dotnet_build" task
Build a .NET project.
### Overview
In your project's Gruntfile, add a section named `dotnet_build` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  dotnet_build: {
    your_target: {
        options: {
        
        }
    },
  },
});
```
### Options

## The "dotnet_build_server" task
Interact with servers started by a build.
### Overview
In your project's Gruntfile, add a section named `dotnet_build_server` to the data object passed into `grunt.initConfig()`.
  
```js
grunt.initConfig({
  dotnet_build_server: {
    your_target: {
        options: {
        
        }
    },
  },
});
```
### Options

## The "dotnet_clean" task
Clean build outputs of a .NET project.

### Overview
In your project's Gruntfile, add a section named `dotnet_clean` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  dotnet_clean: {
    your_target: {
        options: {
        
        }
    },
  },
});
```
### Options

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
        
        }
    },
  },
});
```
### Options

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
