import { render } from "@testing-library/react";

import App from "./App";

test("run vite project!", () => {
  const { getByText } = render(<App />);

  expect(getByText(/Success on running vite \+ TS project!!/)).not.toBeNull();
});
