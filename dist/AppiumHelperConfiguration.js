"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppiumHelperConfiguration = void 0;
class AppiumHelperConfiguration {
    constructor(_require = './node_modules/codeceptjs/lib/helper/Appium', _platform = 'Android', _app = 'http://localhost', _device = 'emulator') {
        this._require = _require;
        this._platform = _platform;
        this._app = _app;
        this._device = _device;
    }
    /** @inheritdoc */
    name() {
        return 'Appium';
    }
    /** @inheritdoc */
    generate(execOptions) {
        const [device] = execOptions.target
            ? execOptions.target.split(',').map(t => t.trim())
            : [this._device];
        return {
            "require": this._require,
            "platform": this._platform,
            "app": this._app,
            "device": device,
        };
    }
}
exports.AppiumHelperConfiguration = AppiumHelperConfiguration;
