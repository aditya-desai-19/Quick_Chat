import { render, screen } from "@testing-library/react"
import Navbar from "../components/Navbar";
import { BrowserRouter } from "react-router-dom";
import UserContext from "../utils/UserContext";
import "@testing-library/jest-dom";

const getUser = jest.fn();

test("should render Navbar", () => {
    render(
        <BrowserRouter>
            <UserContext.Provider value={{ getUser }}>
                <Navbar />
            </UserContext.Provider>
        </BrowserRouter>
    );

    const navbar = screen.getByTestId("navbar");

    expect(navbar).toBeInTheDocument(); 
});

test("should render signout text ", () => {
    render(
        <BrowserRouter>
            <UserContext.Provider value={{ user: {name: "Aditya"} }}>
                <Navbar />
            </UserContext.Provider>
        </BrowserRouter>
    );

    const signOut = screen.getByText("Sign out");

    expect(signOut).toBeInTheDocument(); 
});