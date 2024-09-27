import { fireEvent, render, screen } from "@testing-library/react"
import Header from "../Header";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import "@testing-library/jest-dom";

// -----------E-13 PART 6----------start
it("Should load Header Component with a login button", () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    );

    const loginButton = screen.getByRole("button",{name: "Login"}); //better way
    // const loginButton = screen.getByText("Login");
    
    expect(loginButton).toBeInTheDocument();
})

it("Should render Header Component with a Cart item", () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    );

    // const cartItems = screen.getByText("Cart - (1 items)");
    const cartItems = screen.getByText(/Cart/); // REGEX between two slashes
    expect(cartItems).toBeInTheDocument();
});

it("Should change Login button to Logout", () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    );

    const loginButton = screen.getByRole("button",{name: "Login"});
    //simulate the click event
    fireEvent.click(loginButton);
    const logoutButton = screen.getByRole("button",{name: "Logout"});


    expect(logoutButton).toBeInTheDocument();
});

// -----------PART 6----------end