import { render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";

import HelloWorld from "./HelloWorld";

describe("HelloWorld", () => {
  it("should renders a msg", () => {
    // arrange
    render(<HelloWorld msg="Hello React!" />);

    // act
    const title = screen.getByTestId("title");

    // assert
    expect(title).toHaveTextContent("Hello React!");
  });

  it("should increment on button click", async () => {
    const user = userEvent.setup();
    render(<HelloWorld msg="Hello" />);

    const btn = screen.getByRole("button", { name: "count is: 0" });

    expect(btn).toHaveTextContent("count is: 0");

    await user.click(btn);

    expect(btn).toHaveTextContent("count is: 1");
  });
});
