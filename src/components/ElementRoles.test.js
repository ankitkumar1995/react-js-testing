import { render, screen } from "@testing-library/react";
import ElementRoles from "./ElementRoles";
test("can find elements by role", () => {
  render(<ElementRoles />);
  const roles = [
    "link",
    "button",
    "contentinfo",
    "heading",
    "banner",
    "img",
    "checkbox",
    "spinbutton",
    "radio",
    "textbox",
    "list",
    "listitem",
  ];
  for (let role of roles) {
    const ele = screen.getByRole(role);
    expect(ele).toBeInTheDocument();
  }
});
