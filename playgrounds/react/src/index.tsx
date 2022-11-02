import React from "react";
import ReactDOM from "react-dom";

import { Text } from "@ds.e/react";

import "@ds.e/scss/lib/Text.css";
import "@ds.e/scss/lib/global.css";

ReactDOM.render(
  <Text size="xl">this is some text</Text>,
  document.querySelector("#root")
);
