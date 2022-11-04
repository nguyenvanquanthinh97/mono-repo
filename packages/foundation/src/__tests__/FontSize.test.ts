import { FontSize } from "../FontSize";

test("snapshot of fontsize", () => {
  expect(FontSize).toMatchSnapshot();
});
