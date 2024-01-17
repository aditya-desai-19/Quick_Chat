import { render, screen } from "@testing-library/react"
import UserContext from "../utils/UserContext";
import ChatContext from "../utils/ChatContext";
import Users from "../components/Users";
import "@testing-library/jest-dom";

test("should render Users component", () => {
    render(
        <UserContext.Provider value={{user: {name: "John"}}}>
            <ChatContext.Provider value={{setUserContactInfo: () => {}}}>
                <Users />
            </ChatContext.Provider>
        </UserContext.Provider>
    );

    const users = screen.getByTestId("users");

    expect(users).toBeInTheDocument();
})