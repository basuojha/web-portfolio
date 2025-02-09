global.IntersectionObserver = class {
  root = null;
  rootMargin = "";
  thresholds = [];

  constructor(
    callback: IntersectionObserverCallback,
    options: IntersectionObserverInit = {}
  ) {}
  observe() {}
  unobserve() {}
  disconnect() {}
  takeRecords() {
    return [];
  }
};

import { render, screen, waitFor } from "@testing-library/react";
import Home from "components/Home";
import { GlobalProvider } from "contexts/GlobalContext";

test("render Typewriter", async () => {
  render(
    <GlobalProvider>
      <Home />
    </GlobalProvider>
  );

  const typewriterEl = await waitFor(
    () => screen.getByText("Welcome to my portfolio!"),
    { timeout: 5000 }
  );
  expect(typewriterEl.textContent).toBe("Welcome to my portfolio!");
});
