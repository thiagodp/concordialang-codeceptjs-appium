# concordialang-codeceptjs-appium

> 🔌 Concordia Compiler Plug-in for CodeceptJS with Appium

Generates and executes test scripts for **mobile or applications**. Uses [CodeceptJS](https://codecept.io) with [Appium](http://appium.io).

This plug-in is based on [concordialang-codeceptjs-webdriverio](https://github.com/thiagodp/concordialang-codeceptjs-webdriverio). However, it does not require WebDriverIO.


## 💿 Installation

Before installing:
- Make sure you have [Concordia](https://github.com/thiagodp/concordialang) `1.0.0` or above.
- Go to your applications' root folder.

Installation:

```bash
concordia --plugin-install codeceptjs-webdriverio
```

*Note*: If you want to test a **web-based** mobile or desktop application, you will have to install [Java 8 or above](https://www.java.com/download/), since Appium will use [WebDriverIO](http://webdriver.io), which requires Java.

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

## You may also like to install

1. [Appium Doctor](https://github.com/appium/appium-doctor), if you are testing a **mobile** application
> Attempts to diagnose and fix common Node, iOS and Android configuration issues before starting Appium.
```bash
npm install -g appium-doctor
```

2. [Appium Desktop](https://github.com/appium/appium-desktop/), if you are testing a **desktop** application
> Appium Server and Inspector in Desktop GUIs for Mac, Windows, and Linux

Appium Desktop has its own [installer](https://github.com/appium/appium-desktop/releases/).


## 🚀 Execution

A plug-in is only executed with the [Concordia Compiler](https://github.com/thiagodp/concordialang). Please see its documentation.

### Generated configuration file

Concordia Compiler uses plug-ins to generate a basic configuration file for the target testing framework. Plugins for CodeceptJS usually generate `codeceptjs.json`.

#### Version 0.x

Version `0.x` generates `codecept-appium.json` with the following content:

```json
{
	"tests": "test/**/*.js",
	"output": "output",
	"helpers": {
    		"Appium": {
      			"plataform": "Android",
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

## 📖 Documentation

### Installed by version 0.x

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

Please see the plugin [concordialang-codeceptjs-webdriverio](https://github.com/thiagodp/concordialang-codeceptjs-webdriverio#integration-with-codeceptjs).


## 👁 See Also

- [concordialang-codeceptjs-webdriverio](https://github.com/thiagodp/concordialang-codeceptjs-webdriverio): plugin for CodeceptJS with WebDriverIO.
- [Concordia](https://github.com/thiagodp/concordialang)

## License

![AGPL](https://www.gnu.org/graphics/agplv3-88x31.png) © [Thiago Delgado Pinto](https://github.com/thiagodp)

[GNU Affero General Public License version 3](LICENSE.txt)
