import { TestScriptExecutionOptions } from "concordialang-plugin";
import { HelperConfiguration } from "concordialang-codeceptjs-core";

export class AppiumHelperConfiguration implements HelperConfiguration {

    constructor(
        private readonly _platform: any = 'Android',
        private readonly _app: string = 'http://localhost',
        private readonly _device: string = 'emulator'
     ) {
    }

    /** @inheritdoc */
    name() {
        return 'Appium';
    }

    /** @inheritdoc */
    generate( execOptions: TestScriptExecutionOptions ): any {
        const [ device ] = execOptions.target
            ? execOptions.target.split( ',' ).map( t => t.trim() )
            : [ this._device ];
        return  {
            "platform": this._platform,
            "app": this._app,
            "device": device,
        };
    }

}