import { render, screen } from "@testing-library/react"
import UserContext from "../utils/UserContext";
import PersonalInfo from "../components/PersonalInfo";
import "@testing-library/jest-dom";

test("should render Personal Info", () => {
    render(
        <UserContext.Provider value={{user: {name: "John"}}}>
            <PersonalInfo />
        </UserContext.Provider>
    );

    const personalInfo = screen.getByTestId("personalInfo");

    expect(personalInfo).toBeInTheDocument(); 
})