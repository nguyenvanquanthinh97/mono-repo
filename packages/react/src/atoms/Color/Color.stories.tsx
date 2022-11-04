import React from "react";
import { Spacing } from "@leo.97/foundation/lib/Spacing";

import { Color } from "./Color";

import "@leo.97/scss/lib/Utilities.css";

export default {
  title: "Atoms/Color",
};

export const Common = ({ hexCode = "cyan" }) => <Color hexCode={hexCode} />;

Common.args = {
  hexCode: "cyan",
};

export const CustomDimensions = ({
  hexCode = "cyan",
  width = "xs" as const,
  height = "xs" as const,
}) => <Color hexCode={hexCode} width={width} height={height} />;

CustomDimensions.args = {
  hexCode: "cyan",
  width: "xs",
  height: "xs",
};

CustomDimensions.argTypes = {
  hexCode: {
    control: "text",
  },
  width: {
    control: "select",
    options: Object.values(Spacing),
  },
  height: {
    control: "select",
    options: Object.values(Spacing),
  },
};
