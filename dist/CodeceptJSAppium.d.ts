import { TestScriptExecutionOptions } from 'concordialang-types';
import { CodeceptJS, TestScriptExecutor } from 'concordialang-codeceptjs-core';
/**
 * Plug-in for CodeceptJS with Appium.
 */
export declare class CodeceptJSAppium extends CodeceptJS {
    /**
     * Constructor
     *
     * @param fsToUse Filesystem object to use. Default is nodejs fs.
     * @param encoding Encoding to use. Default is 'utf8'.
     */
    constructor(fsToUse?: any, encoding?: string);
    protected createTestScriptExecutor(options: TestScriptExecutionOptions): TestScriptExecutor;
}
