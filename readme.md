[![npm version](https://badge.fury.io/js/concordialang-codeceptjs-appium.svg)](https://badge.fury.io/js/concordialang-codeceptjs-appium)
[![GitHub last commit](https://img.shields.io/github/last-commit/thiagodp/concordialang-codeceptjs-appium.svg)](https://github.com/thiagodp/concordialang-codeceptjs-appium/releases)

# concordialang-codeceptjs-appium

> 🔌 Concordia Compiler Plug-in for CodeceptJS with Appium

Generates and executes test scripts for **mobile** or **desktop** applications. Uses [CodeceptJS](https://codecept.io) with [Appium](http://appium.io).

## [What's New](https://github.com/thiagodp/concordialang-codeceptjs-appium/releases)

## Installation

Before installing:
- Make sure you have [Concordia](https://github.com/thiagodp/concordialang) `1.0.0` or above.
- Go to your applications' root folder.

*Note*: If you want to test a **web-based** mobile or desktop application, you will have to install [Java 8 or above](https://www.java.com/download/), since Appium will use [WebDriverIO](http://webdriver.io), which requires Java.


Installation via [Concordia](https://github.com/thiagodp/concordialang):

```bash
concordia --plugin-install codeceptjs-appium
```

Installation via NPM:

```bash
npm install --save-dev concordialang-codeceptjs-appium
```

### Optional installation

You can install additional packages **when needed**, via NPM.

The following **database drivers** allow you to connect to a certain database type during the *test execution*:

| driver        | command to install                            | note           |
| ------------- | --------------------------------------------- | -------------- |
| CSV files     | `npm install --save-dev database-js-csv`      |                |
| Excel files   | `npm install --save-dev database-js-xlsx`     |                |
| Firebase      | `npm install --save-dev database-js-firebase` |                |
| INI files     | `npm install --save-dev database-js-ini`      |                |
| JSON files    | `npm install --save-dev database-js-json`     |                |
| MySQL         | `npm install --save-dev database-js-mysql`    |                |
| MS Access     | `npm install --save-dev database-js-adodb`    | *Windows only* |
| MS SQL Server | `npm install --save-dev database-js-mssql`    |                |
| PostgreSQL    | `npm install --save-dev database-js-postgres` |                |
| SQLite        | `npm install --save-dev database-js-sqlite`   |                |

### You may also like to install

1. [Appium Doctor](https://github.com/appium/appium-doctor), if you are testing a **mobile** application
> Attempts to diagnose and fix common Node, iOS and Android configuration issues before starting Appium.
```bash
npm install -g appium-doctor
```

2. [Appium Desktop](https://github.com/appium/appium-desktop/), if you are testing a **desktop** application. It has its own [installer](https://github.com/appium/appium-desktop/releases/)
> Appium Server and Inspector in Desktop GUIs for Mac, Windows, and Linux

## Environment Setup

> Unfortunately, the setup process for testing mobile or desktop applications with Appium requires some manual effort.

[Appium](http://appium.io/) provides automation for a particular platform through a *driver*. Every driver comes with its own setup requirements - usually the same ones for app development. For example, to automate the tests of an Android app, you will need to install [Android SDK](https://developer.android.com/studio). Likewise, an iOS app will need [iOS SDK](https://developer.apple.com/ios/).

**Appium Drivers:**
- *Android apps* with [UiAutomator2 Driver](http://appium.io/docs/en/drivers/android-uiautomator2/index.html)
- *Android apps* with [Expresso Driver](http://appium.io/docs/en/drivers/android-espresso/index.html) *(beta)*
- *iOS apps* or *tvOS apps* with [XCUITest Driver](http://appium.io/docs/en/drivers/ios-xcuitest/index.html)
- *Windows Desktop apps* with [Windows Driver](http://appium.io/docs/en/drivers/windows/index.html)
- *Mac Desktop apps* with [Mac Driver](http://appium.io/docs/en/drivers/mac/index.html)

Therefore, please install the driver and the needed requirements in order to test your application.

## Execution

Execute it with the [Concordia Compiler](https://github.com/thiagodp/concordialang). Example:

```bash
concordia --plugin codeceptjs-appium
```

### Generated configuration file

The plug-in generates a basic configuration file for you.

#### Versions 0.x and 1.x

Versions `0.x` and `1.x` generate the file `codecept.json` with the following content:

```json
{
	"tests": "test/**/*.js",
	"output": "output",
	"helpers": {
    		"Appium": {
      			"platform": "Android",
      			"app": "http://localhost",
				"device": "emulator"
    		},
		"DbHelper": {
			"require": "./node_modules/codeceptjs-dbhelper"
		},
		"CmdHelper": {
			"require": "./node_modules/codeceptjs-cmdhelper"
		}
	},
	"bootstrap": false,
	"mocha": {
		"reporterOptions": {
			"codeceptjs-cli-reporter": {
				"stdout": "-",
				"options": {
					"steps": true
				}
			},
			"json": {
				"stdout": "output/output.json"
			}
		}
	}
}
```

The above file is compatible with CodeceptJS `1.2.1`, and probably any version in `1.x`.


## Documentation

### Packages installed by version 1.x

- No packages are installed *globally*.
- No changes to `package.json`.
- All the same dependencies as version `0.x`.

### Packages installed by version 0.x

Installed globally:

| package             | version  | reason                                                                  |
| ------------------- | -------- | ----------------------------------------------------------------------- |
| codeceptjs          | `1.2.1`  | Allow executing CodeceptJS in the CLI without NPX or via `node_modules` |
| appium              | latest   | Needed test server                                                      |

Installed in `package.json`'s `devDependencies`:

| package              | version | reason                                                                              |
| -------------------- | ------- | ----------------------------------------------------------------------------------- |
| codeceptjs           | `1.2.1` | Needed framework                                                                    |
| mocha                | `5.2.0` | Generate JSON reports read by the plug-in                                           |
| mocha-multi          | `1.0.1` | Allow to generate multiple reports simultaneously, such as the JSON's and the CLI's |
| codeceptjs-cmdhelper | latest  | Execute Concordia commands in the CLI                                               |
| codeceptjs-dbhelper  | latest  | Execute Concordia commands in a database                                            |
| database-js          | latest  | Access databases during tests, e.g., to setup them for the test                     |
| database-js-json     | latest  | Access JSON files as databases                                                      |

### Integration with CodeceptJS

Documentation available in [concordialang-codeceptjs-core](https://github.com/thiagodp/concordialang-codeceptjs-core#documentation).


## See Also

- [Mobile Testing with CodeceptJS and Appium](https://codecept.io/mobile)

- [Appium Desired Capabilities](http://appium.io/docs/en/writing-running-appium/caps/index.html)

- [concordialang-codeceptjs-webdriverio](https://github.com/thiagodp/concordialang-codeceptjs-webdriverio): plugin for CodeceptJS with WebDriverIO.
- [Concordia](https://github.com/thiagodp/concordialang)


## License

![AGPL](https://www.gnu.org/graphics/agplv3-88x31.png) © [Thiago Delgado Pinto](https://github.com/thiagodp)

[GNU Affero General Public License version 3](LICENSE.txt)
