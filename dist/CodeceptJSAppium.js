"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const concordialang_codeceptjs_core_1 = require("concordialang-codeceptjs-core");
const path_1 = require("path");
/**
 * Plug-in for CodeceptJS with Appium.
 *
 * @author Thiago Delgado Pinto
 */
class CodeceptJSAppium extends concordialang_codeceptjs_core_1.CodeceptJS {
    /**
     * Constructor
     *
     * @param fsToUse Filesystem object to use. Default is nodejs fs.
     * @param encoding Encoding to use. Default is 'utf8'.
     */
    constructor(descriptorPath, fsToUse, encoding = 'utf8') {
        super(descriptorPath, fsToUse, encoding);
    }
    createTestScriptExecutor(options) {
        return __awaiter(this, void 0, void 0, function* () {
            const scriptFileFilter = path_1.join(options.dirScript, '**/*.js');
            const cfgMaker = new concordialang_codeceptjs_core_1.ConfigMaker();
            const config = cfgMaker.makeBasicConfig(scriptFileFilter, options.dirResult);
            cfgMaker.setAppiumHelper(config);
            cfgMaker.setDbHelper(config);
            cfgMaker.setCmdHelper(config);
            return new concordialang_codeceptjs_core_1.TestScriptExecutor(config);
        });
    }
}
exports.CodeceptJSAppium = CodeceptJSAppium;
