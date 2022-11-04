/// <reference types="react" />
import "@leo.97/scss/lib/Utilities.css";
declare const _default: {
    title: string;
};
export default _default;
export declare const Common: {
    ({ hexCode }: {
        hexCode?: string | undefined;
    }): JSX.Element;
    args: {
        hexCode: string;
    };
};
export declare const CustomDimensions: {
    ({ hexCode, width, height, }: {
        hexCode?: string | undefined;
        width?: "xs" | undefined;
        height?: "xs" | undefined;
    }): JSX.Element;
    args: {
        hexCode: string;
        width: string;
        height: string;
    };
    argTypes: {
        hexCode: {
            control: string;
        };
        width: {
            control: string;
            options: ("xs" | "none" | "xxxs" | "xxs" | "sm" | "md" | "lg" | "xl" | "xxl" | "xxxl")[];
        };
        height: {
            control: string;
            options: ("xs" | "none" | "xxxs" | "xxs" | "sm" | "md" | "lg" | "xl" | "xxl" | "xxxl")[];
        };
    };
};
