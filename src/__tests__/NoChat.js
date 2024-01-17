import { render, screen } from "@testing-library/react"
import NoChat from "../components/NoChat";
import "@testing-library/jest-dom";

test("No chat component is rendered", () => {
    render(<NoChat />);

    const nochat = screen.getByTestId("nochat");

    expect(nochat).toBeInTheDocument(); 
});