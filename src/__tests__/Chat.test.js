import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom";
import MessageContext from "../utils/MessageContext";
import Chat from "../components/Chat";
import UserContext from "../utils/UserContext";
import ChatContext from "../utils/ChatContext";

test("should render Chat component", () => {
    render(
        <MessageContext.Provider value={{ enableDelete: () => { } }}>
            <UserContext.Provider value={{ user: { uid: "134568f" } }}>
                <ChatContext.Provider value={{ contactUser: { uid: '134568p' } }}>
                    <Chat />
                </ChatContext.Provider>
            </UserContext.Provider>
        </MessageContext.Provider>
    );

    const chat = screen.getByTestId("chat");

    expect (chat).toBeInTheDocument();
})