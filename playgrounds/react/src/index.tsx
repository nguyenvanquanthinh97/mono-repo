import React from "react";
import ReactDOM from "react-dom";

import { Select } from "@ds.e/react";

import "@ds.e/scss/lib/global.css";
import "@ds.e/scss/lib/Select.css";

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
