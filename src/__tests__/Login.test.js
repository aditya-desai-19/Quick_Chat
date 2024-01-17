import { render, screen } from "@testing-library/react"
import Login from "../components/Login";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
import UserContext from "../utils/UserContext";

const getUser = jest.fn();

test("Login component",() => {
    render(
        <BrowserRouter>
            <UserContext.Provider value={{ getUser }}>
                <Login />
            </UserContext.Provider>
        </BrowserRouter>
    );

    const login = screen.getByTestId("login");

    expect(login).toBeInTheDocument();
})