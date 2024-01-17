import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom";
import DisplayComponent from "../components/DisplayComponent";

test("Display component is rendered", () => {
    render(<DisplayComponent />);

    const display = screen.getByTestId("display");

    expect(display).toBeInTheDocument();
});