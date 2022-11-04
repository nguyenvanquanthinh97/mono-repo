import React from "react";
import { FontSize } from "@leo.97/foundation";
export interface TextProps {
    size?: keyof typeof FontSize;
    children?: React.ReactNode | React.ReactNode[];
}
export declare const Text: React.FC<TextProps>;
