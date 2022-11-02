import React from "react";
import { Spacing } from "@ds.e/foundation";
interface ColorProps {
    hexCode: string;
    width?: keyof typeof Spacing;
    height?: keyof typeof Spacing;
}
export declare const Color: React.FC<ColorProps>;
export {};
