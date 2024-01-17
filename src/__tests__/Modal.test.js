import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom"
import Modal from "../components/Modal";

const props = {
    msg: {
        text: "Hello"
    },
    handleCloseModal: () => {},
    combinedId: ""
};

test("should render Modal component", () => {
    render(<Modal msg={props.msg} handleCloseModal={props.handleCloseModal} combinedId={props.combinedId}/>);

    const deleteBtn = screen.getByRole("button", {name: "Delete"});

    expect(deleteBtn).toBeInTheDocument();
})