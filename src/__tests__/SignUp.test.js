import { render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom";
import SignUp from "../components/SignUp";
import "@testing-library/jest-dom";

test("signup component is rendered", () => {
    render(
        <BrowserRouter>
            <SignUp />
        </BrowserRouter>
    );

    const signUp = screen.getByTestId("signup");

    expect(signUp).toBeInTheDocument();
})
