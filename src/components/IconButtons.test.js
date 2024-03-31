import { render, screen } from "@testing-library/react";
import IconButtons from "./IconButtons";

test("find element by aria label name", () => {
  render(<IconButtons />);
  const buttonSignIn = screen.getByRole("button", { name: /sign in/i });
  const buttonSignOut = screen.getByRole("button", {
    name: /sign out/i,
  });
  expect(buttonSignIn).toBeInTheDocument();
  expect(buttonSignOut).toBeInTheDocument();
});
