import { CodeceptJS, TestScriptExecutor } from 'concordialang-codeceptjs-core';
import { AppiumHelperConfiguration } from './AppiumHelperConfiguration';

/**
 * Plug-in for CodeceptJS with Appium.
 *
 * @author Thiago Delgado Pinto
 */
export class CodeceptJSAppium extends CodeceptJS {

    /** @inheritdoc */
    protected createTestScriptExecutor(): TestScriptExecutor {
        return new TestScriptExecutor( [
            new AppiumHelperConfiguration()
        ] );
    }

}