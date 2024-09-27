import { render, screen } from "@testing-library/react"
import Contact from "../Contact"
import "@testing-library/jest-dom"


describe ("Contact Us Page Test Case", () => {
    beforeAll(() => {
        console.log("beforeAll");
    })
    beforeEach(() => {
        console.log("beforeEach");
    })
    afterAll(() => {
        console.log("afterAll")
    })
    afterEach(() => {
        console.log("afterEach")
    })
    it("Should load conatct us component", () => {
        render(<Contact/>)
        const heading = screen.getByRole("heading");
        //Assertion
        expect(heading).toBeInTheDocument();
    })
    
    it("Should load button inside component", () => {
        render(<Contact/>)
        const button = screen.getByRole("button");
        const buttonSubmit = screen.getByText("Submit");
        const inputName = screen.getAllByPlaceholderText("name")
        const inputBoxes = screen.getAllByRole("textbox");
    
        console.log(inputBoxes.length);
    
        expect(inputBoxes.length).toBe(2);
        expect(inputBoxes.length).not.toBe(2);
        //Assertion
        expect(buttonSubmit).toBeInTheDocument();
    })
})



// UI component first render on DOM - How?  render 