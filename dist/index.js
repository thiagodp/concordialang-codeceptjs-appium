"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CodeceptJSAppium = void 0;
const concordialang_codeceptjs_core_1 = require("concordialang-codeceptjs-core");
const AppiumHelperConfiguration_1 = require("./AppiumHelperConfiguration");
/**
 * Plug-in for CodeceptJS with Appium.
 *
 * @author Thiago Delgado Pinto
 */
class CodeceptJSAppium extends concordialang_codeceptjs_core_1.CodeceptJS {
    /** @inheritdoc */
    createTestScriptExecutor() {
        return new concordialang_codeceptjs_core_1.TestScriptExecutor([
            new AppiumHelperConfiguration_1.AppiumHelperConfiguration()
        ]);
    }
}
exports.CodeceptJSAppium = CodeceptJSAppium;
