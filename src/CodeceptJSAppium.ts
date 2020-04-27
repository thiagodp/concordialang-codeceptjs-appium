import { CodeceptJS, ConfigMaker, TestScriptExecutor } from 'concordialang-codeceptjs-core';
import { TestScriptExecutionOptions } from 'concordialang-plugin';
import { join } from 'path';

/**
 * Plug-in for CodeceptJS with Appium.
 *
 * @author Thiago Delgado Pinto
 */
export class CodeceptJSAppium extends CodeceptJS {

    /**
     * Constructor
     *
     * @param fsToUse Filesystem object to use. Default is nodejs fs.
     * @param encoding Encoding to use. Default is 'utf8'.
     */
    constructor(
        descriptorPath?: string,
        fsToUse?: any,
        encoding: string = 'utf8'
    ) {
        super(
            descriptorPath,
            fsToUse,
            encoding
        );
    }

    protected async createTestScriptExecutor(
        options: TestScriptExecutionOptions
        ): Promise< TestScriptExecutor > {

        const scriptFileFilter = join( options.dirScript, '**/*.js' );

        const cfgMaker: ConfigMaker = new ConfigMaker();
        const config = cfgMaker.makeBasicConfig(
            scriptFileFilter,
            options.dirResult
        );
        cfgMaker.setAppiumHelper( config );
        cfgMaker.setDbHelper( config );
        cfgMaker.setCmdHelper( config );

        return new TestScriptExecutor( config );
    }

}