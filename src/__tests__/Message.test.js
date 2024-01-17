import { render, screen } from "@testing-library/react"
import Message from "../components/Message"
import MessageContext from "../utils/MessageContext"
import "@testing-library/jest-dom";

const mockData = {
    message: {
        senderId: '123f6',
        img: 'https://images.pexels.com/photos/19877105/pexels-photo-19877105/free-photo-of-mong-c.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
    },
    contactUser: {
        id: '1234fq',
        photoURL: 'https://images.pexels.com/photos/9162803/pexels-photo-9162803.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
    },
    user: {
        id: '123f6',
        photoURL: 'https://images.pexels.com/photos/19686433/pexels-photo-19686433/free-photo-of-side-view-of-a-young-woman-in-a-white-shirt.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
    }
}

test("should render Message component", () => {
    render(
        <MessageContext.Provider value={{enableDelete: () => {}}}>
            <Message user={mockData.user} contactUser={mockData.contactUser} message={mockData.message}/>
        </MessageContext.Provider>
    );

    const message = screen.getByTestId("message");

    expect(message).toBeInTheDocument();
})