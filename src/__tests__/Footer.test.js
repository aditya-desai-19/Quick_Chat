import { render, screen } from "@testing-library/react"
import Footer from "../components/Footer";
import "@testing-library/jest-dom";

test("check if footer is rendered", () => {
    render(<Footer />);

    const footer = screen.getByTestId("footer");

    expect(footer).toBeInTheDocument();
})