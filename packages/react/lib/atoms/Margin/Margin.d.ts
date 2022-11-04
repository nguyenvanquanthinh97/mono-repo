import React from "react";
import { Spacing } from "@leo.97/foundation";
interface MarginProps {
    space?: keyof typeof Spacing;
    left?: boolean;
    right?: boolean;
    top?: boolean;
    bottom?: boolean;
    children?: React.ReactNode | React.ReactNode[];
}
export declare const Margin: React.FC<MarginProps>;
export {};
