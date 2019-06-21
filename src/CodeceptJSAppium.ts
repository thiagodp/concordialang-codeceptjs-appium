import { join } from 'path';
import { TestScriptExecutionOptions } from 'concordialang-plugin'
import { CodeceptJS, TestScriptExecutor, ConfigMaker } from 'concordialang-codeceptjs-core';

/**
 * Plug-in for CodeceptJS with Appium.
 */
export class CodeceptJSAppium extends CodeceptJS {

    /**
     * Constructor
     *
     * @param fsToUse Filesystem object to use. Default is nodejs fs.
     * @param encoding Encoding to use. Default is 'utf8'.
     */
    constructor(
        fsToUse?: any,
        encoding: string = 'utf8'
    ) {
        super(
            join( __dirname, '../', 'codeceptjs.json' ),
            fsToUse,
            encoding
        );
    }

    protected createTestScriptExecutor( options: TestScriptExecutionOptions ): TestScriptExecutor {

        const scriptFileFilter = join( options.sourceCodeDir, '**/*.js' );

        const cfgMaker: ConfigMaker = new ConfigMaker();
        let config = cfgMaker.makeBasicConfig(
            scriptFileFilter,
            options.executionResultDir
        );
        cfgMaker.setAppiumHelper( config );
        cfgMaker.setDbHelper( config );
        cfgMaker.setCmdHelper( config );

        return new TestScriptExecutor( config );
    }

}