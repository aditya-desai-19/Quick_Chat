import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom";
import UserContext from "../utils/UserContext";
import ChatContext from "../utils/ChatContext";
import Messages from "../components/Messages";

test("should render Messages component", () => {
    render(
        <UserContext.Provider value={{user: {uid: "134568f"}}}>
            <ChatContext.Provider value={{contactUser: {uid: '134568p'}}}>
                <Messages />
            </ChatContext.Provider>
        </UserContext.Provider>
    );

    const messages = screen.getByTestId("messages");

    expect (messages).toBeInTheDocument();
})