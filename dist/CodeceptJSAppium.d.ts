import { CodeceptJS, TestScriptExecutor } from 'concordialang-codeceptjs-core';
import { TestScriptExecutionOptions } from 'concordialang-plugin';
/**
 * Plug-in for CodeceptJS with Appium.
 *
 * @author Thiago Delgado Pinto
 */
export declare class CodeceptJSAppium extends CodeceptJS {
    /**
     * Constructor
     *
     * @param fsToUse Filesystem object to use. Default is nodejs fs.
     * @param encoding Encoding to use. Default is 'utf8'.
     */
    constructor(descriptorPath?: string, fsToUse?: any, encoding?: string);
    protected createTestScriptExecutor(options: TestScriptExecutionOptions): Promise<TestScriptExecutor>;
}
