import { CodeceptJS, TestScriptExecutor } from 'concordialang-codeceptjs-core';
/**
 * Plug-in for CodeceptJS with Appium.
 *
 * @author Thiago Delgado Pinto
 */
export declare class CodeceptJSAppium extends CodeceptJS {
    /** @inheritdoc */
    protected createTestScriptExecutor(): TestScriptExecutor;
}
