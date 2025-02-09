import { render, screen } from "@testing-library/react";
import NavBar from "components/NavBar";
import userEvent from "@testing-library/user-event";

test("renders Navbar", () => {
  render(<NavBar />);
  const navbarEl = screen.getByTestId("navbar");
  expect(navbarEl).toBeInTheDocument();
});

test("renders hamburger menu", async () => {
  render(<NavBar />);
  const user = userEvent.setup();
  const hamburgerMenuEl = screen.getByRole("button");
  await user.click(hamburgerMenuEl);
  expect(screen.getByTestId("menu")).toBeInTheDocument();
});
