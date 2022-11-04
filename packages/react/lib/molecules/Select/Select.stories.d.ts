/// <reference types="react" />
import "@leo.97/scss/lib/Select.css";
declare const _default: {
    title: string;
    decorators: import("@storybook/csf").DecoratorFunction<import("@storybook/csf").AnyFramework, import("@storybook/csf").Args>[];
};
export default _default;
export declare const Common: () => JSX.Element;
export declare const RenderOption: () => JSX.Element;
export declare const CustomLabel: {
    ({ label }: {
        label?: string | undefined;
    }): JSX.Element;
    args: {
        label: string;
    };
    argTypes: {
        label: {
            control: string;
        };
    };
};
