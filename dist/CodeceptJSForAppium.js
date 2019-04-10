"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = require("path");
const concordialang_codeceptjs_webdriverio_1 = require("concordialang-codeceptjs-webdriverio");
/**
 * Plug-in for CodeceptJS with Appium.
 */
class CodeceptJSForAppium extends concordialang_codeceptjs_webdriverio_1.CodeceptJS {
    /**
     * Constructor
     *
     * @param fsToUse Filesystem object to use. Default is nodejs fs.
     * @param encoding Encoding to use. Default is 'utf8'.
     */
    constructor(fsToUse, encoding = 'utf8') {
        super(path_1.join(__dirname, '../', 'codeceptjs-appium.json'), fsToUse, encoding);
    }
    createTestScriptExecutor(options) {
        const scriptFileFilter = path_1.join(options.sourceCodeDir, '**/*.js');
        const cfgMaker = new concordialang_codeceptjs_webdriverio_1.ConfigMaker();
        let config = cfgMaker.makeBasicConfig(scriptFileFilter, options.executionResultDir);
        cfgMaker.setAppiumHelper(config);
        cfgMaker.setDbHelper(config);
        cfgMaker.setCmdHelper(config);
        return new concordialang_codeceptjs_webdriverio_1.TestScriptExecutor(config);
    }
}
exports.CodeceptJSForAppium = CodeceptJSForAppium;
