import { TestScriptExecutionOptions } from 'concordialang-types/dist/testscript/TestScriptExecution';
import { CodeceptJS } from 'concordialang-codeceptjs-webdriverio/dist/CodeceptJS';
import { TestScriptExecutor } from 'concordialang-codeceptjs-webdriverio/dist/TestScriptExecutor';
/**
 * Plug-in for CodeceptJS with Appium.
 */
export declare class CodeceptJSForAppium extends CodeceptJS {
    /**
     * Constructor
     *
     * @param fsToUse Filesystem object to use. Default is nodejs fs.
     * @param encoding Encoding to use. Default is 'utf8'.
     */
    constructor(fsToUse?: any, encoding?: string);
    protected createTestScriptExecutor(options: TestScriptExecutionOptions): TestScriptExecutor;
}
