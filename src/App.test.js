import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders the premium beverage hero heading", () => {
  render(<App />);
  const heading = screen.getByText(/مشروبات عربية فخمة بروح مقهى عالمي/i);
  expect(heading).toBeInTheDocument();
});
