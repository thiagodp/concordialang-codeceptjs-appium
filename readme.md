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
npm i -D concordialang-codeceptjs-appium
```

### You may also like to install

1. [Appium Doctor](https://github.com/appium/appium-doctor), if you are testing a **mobile** application
> Attempts to diagnose and fix common Node, iOS and Android configuration issues before starting Appium.
```bash
npm i -g appium-doctor
```

2. [Appium Desktop](https://github.com/appium/appium-desktop/), if you are testing a **desktop** application. It has its own [installer](https://github.com/appium/appium-desktop/releases/)
> Appium Server and Inspector in Desktop GUIs for Mac, Windows, and Linux

## Environment Setup

> Unfortunately, the setup process for testing mobile or desktop applications with Appium requires some manual effort.

[Appium](http://appium.io/) provides automation for a particular platform through a *driver*. Every driver comes with its own setup requirements - usually the same ones for app development. For example, to automate the tests of an Android app, you will need to install [Android SDK](https://developer.android.com/studio). Likewise, an iOS app will need [iOS SDK](https://developer.apple.com/ios/).

**Appium Drivers:**
> Install the appropriate driver to test your application.

- *Android apps* with [UiAutomator2 Driver](http://appium.io/docs/en/drivers/android-uiautomator2/index.html)
- *Android apps* with [Expresso Driver](http://appium.io/docs/en/drivers/android-espresso/index.html) *(beta)*
- *iOS apps* or *tvOS apps* with [XCUITest Driver](http://appium.io/docs/en/drivers/ios-xcuitest/index.html)
- *Windows Desktop apps* with [Windows Driver](http://appium.io/docs/en/drivers/windows/index.html)
- *Mac Desktop apps* with [Mac Driver](http://appium.io/docs/en/drivers/mac/index.html)

After installing it, you may want to set the [Desired Capabilities](http://appium.io/docs/en/writing-running-appium/caps/index.html).

## Execution

Execute it with the [Concordia Compiler](https://github.com/thiagodp/concordialang). Example:

```bash
concordia --plugin codeceptjs-appium
```

### Configuration file

CodeceptJS reads its configuration from `codeceptjs.json`. This plug-in adds the `"Appium"` to the property `helpers` with a very basic configuration:

```json
{
	"helpers": {
		"Appium": {
			"platform": "Android",
			"app": "http://localhost",
			"device": "emulator"
		}
	}
}
```

**Please see the [Helper Configuration](https://codecept.io/helpers/Appium.html#helper-configuration) for details on how to configure it properly.**

## Supported CodeceptJS commands

See [concordialang-codeceptjs-core](https://github.com/thiagodp/concordialang-codeceptjs-core#documentation).


## Dependencies

**Version 2.x** installs the following dependencies:

| Name                   | Version |
| ---------------------- | ------- |
| `appium`               | 1.x     |
| `codeceptjs`*          | 1.x     |
| `mocha`*               | 5.x     |
| `mocha-multi`*         | 1.x     |
| `mochawesome`*         | 3.x     |

  _*= Version `2.0` installs them through `concordialang-codeceptjs-core`, while version `2.1` or later installs them directly._

**Version 1.x** does

- not install _global_ packages
- not add other packages to your `package.json`
- have the same dependencies as version `0.x`, but they are installed _locally_.

**Version 0.x** install globally:

| package             | version  | reason                                                                  |
| ------------------- | -------- | ----------------------------------------------------------------------- |
| codeceptjs          | `1.2.1`  | Allow executing CodeceptJS in the CLI without NPX or via `node_modules` |
| appium              | `1.x`    | Needed test server                                                      |

**Version 0.x** also add theses packages as `devDependencies` to your `package.json`:

| package              | version | reason                                                                              |
| -------------------- | ------- | ----------------------------------------------------------------------------------- |
| codeceptjs           | `1.2.1` | Needed framework                                                                    |
| mocha                | `5.2.0` | Generate JSON reports read by the plug-in                                           |
| mocha-multi          | `1.0.1` | Allow to generate multiple reports simultaneously, such as the JSON's and the CLI's |
| codeceptjs-cmdhelper | latest  | Execute Concordia commands in the CLI                                               |
| codeceptjs-dbhelper  | latest  | Execute Concordia commands in a database                                            |
| database-js          | latest  | Access databases during tests, e.g., to setup them for the test                     |
| database-js-json     | latest  | Access JSON files as databases                                                      |


## License

![AGPL](https://www.gnu.org/graphics/agplv3-88x31.png) © [Thiago Delgado Pinto](https://github.com/thiagodp)

[GNU Affero General Public License version 3](LICENSE.txt)
