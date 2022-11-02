import React from "react";
import { FontSize } from "@ds.e/foundation";

export interface TextProps {
  size?: keyof typeof FontSize;
  children?: React.ReactNode | React.ReactNode[];
}

export const Text: React.FC<TextProps> = ({
  size = FontSize.base,
  children,
}) => {
  const className = `dse-text dse-text-${size}`;
  return <p className={className}>{children}</p>;
};
