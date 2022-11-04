import React from "react";
import ReactDOM from "react-dom";

import { Select } from "@leo.97/react";

import "@leo.97/scss/lib/global.css";
import "@leo.97/scss/lib/Select.css";

const options = [
  {
    label: "Strict Black",
    value: "strict-black",
  },
  {
    label: "Heavenly Green",
    value: "heavenly-green",
  },
  {
    label: "Sweet Pink",
    value: "pink",
  },
];

ReactDOM.render(
  <div style={{ padding: "40px" }}>
    <Select options={options} />
  </div>,
  document.querySelector("#root")
);
