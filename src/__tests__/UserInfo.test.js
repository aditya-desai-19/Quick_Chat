import { render, screen } from "@testing-library/react"
import UserInfo from "../components/UserInfo"
import "@testing-library/jest-dom";
import UserContext from "../utils/UserContext";

test("should render UserInfo component", () => {
    render(
        <UserInfo user={{ photoURL: "" }} />
    );

    const userInfo = screen.getByTestId("userInfo");

    expect(userInfo).toBeInTheDocument(); 
})