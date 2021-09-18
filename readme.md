[![npm version](https://img.shields.io/npm/v/concordialang-codeceptjs-appium.svg?style=for-the-badge&color=green)](https://badge.fury.io/js/concordialang-codeceptjs-appium)
[![GitHub last commit](https://img.shields.io/github/last-commit/thiagodp/concordialang-codeceptjs-appium.svg?style=for-the-badge)](https://github.com/thiagodp/concordialang-codeceptjs-appium/releases)

# concordialang-codeceptjs-appium

> 🔌 Concordia Compiler Plug-in for CodeceptJS with Appium

Generates and executes test scripts for **mobile** or **desktop** applications. Uses [CodeceptJS](https://codecept.io) with [Appium](http://appium.io).

## [What's New](https://github.com/thiagodp/concordialang-codeceptjs-appium/releases)

## Compatibility

- **Version 2.x** works with [Concordia](https://concordialang.org) `2.0.0` or above.
- **Version 1.x** works with [Concordia](https://concordialang.org) `1.0.0` or above.

## Installation

*Note*: If you want to test a **web-based** mobile or desktop application, you will have to install [Java 8 or above](https://www.java.com/download/), since Appium will need [WebDriverIO](http://webdriver.io), which requires Java.

1. Access your application's folder from the terminal/console.
2. Install it via Concordia or NPM:

	a) Installation via [Concordia](https://concordialang.org):

	```bash
	concordia --plugin-install codeceptjs-appium
	```

	b) Installation via NPM:

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

## Environment setup

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

## License

![AGPL](https://www.gnu.org/graphics/agplv3-88x31.png) © [Thiago Delgado Pinto](https://github.com/thiagodp)

[GNU Affero General Public License version 3](LICENSE.txt)
