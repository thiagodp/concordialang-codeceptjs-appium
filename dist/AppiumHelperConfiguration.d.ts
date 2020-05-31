import { TestScriptExecutionOptions } from "concordialang-plugin";
import { HelperConfiguration } from "concordialang-codeceptjs-core";
export declare class AppiumHelperConfiguration implements HelperConfiguration {
    private readonly _platform;
    private readonly _app;
    private readonly _device;
    constructor(_platform?: any, _app?: string, _device?: string);
    /** @inheritdoc */
    name(): string;
    /** @inheritdoc */
    generate(execOptions: TestScriptExecutionOptions): any;
}
