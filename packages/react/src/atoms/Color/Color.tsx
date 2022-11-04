import React from "react";
import { Spacing } from "@leo.97/foundation";

interface ColorProps {
  hexCode: string;
  width?: keyof typeof Spacing;
  height?: keyof typeof Spacing;
}

export const Color: React.FC<ColorProps> = ({
  hexCode,
  height = Spacing.sm,
  width = Spacing.sm,
}) => {
  const className = `dse-width-${width} dse-height-${height}`;

  return (
    <div
      style={{
        backgroundColor: hexCode,
      }}
      className={className}
    ></div>
  );
};
