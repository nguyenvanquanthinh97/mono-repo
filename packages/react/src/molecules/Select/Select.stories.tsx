import React from "react";
import { withA11y } from "@storybook/addon-a11y";

import { Select } from "./Select";

import "@leo.97/scss/lib/Select.css";

const options = [
  {
    label: "Strict Black",
    value: "black",
  },
  {
    label: "Heavenly Green",
    value: "green",
  },
  {
    label: "Sweet Pink",
    value: "pink",
  },
];

export default {
  title: "Molecules/Select",
  decorators: [withA11y],
};

export const Common = () => <Select options={options} />;

export const RenderOption = () => (
  <Select
    options={options}
    renderOption={({ option, isSelected, getOptionRecommendedProps }) => {
      return (
        <li value={option.value} {...getOptionRecommendedProps()}>
          {option.label} {isSelected && "| SELECTED"}
        </li>
      );
    }}
  />
);

export const CustomLabel = ({ label = "Custom Label" }) => (
  <Select options={options} label={label} />
);

CustomLabel.args = {
  label: "Custom Label",
};

CustomLabel.argTypes = {
  label: {
    control: "text",
  },
};
