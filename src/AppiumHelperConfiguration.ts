import { TestScriptExecutionOptions } from "concordialang-plugin";
import { HelperConfiguration } from "concordialang-codeceptjs-core";

export class AppiumHelperConfiguration implements HelperConfiguration {

    constructor(
        public readonly _require: string = './node_modules/codeceptjs/lib/helper/Appium',
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
            "require": this._require,
            "platform": this._platform,
            "app": this._app,
            "device": device,
        };
    }

}