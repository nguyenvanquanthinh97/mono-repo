import React from "react";
import { Spacing } from "@leo.97/foundation";
interface ColorProps {
    hexCode: string;
    width?: keyof typeof Spacing;
    height?: keyof typeof Spacing;
}
export declare const Color: React.FC<ColorProps>;
export {};
