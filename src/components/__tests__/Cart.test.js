import { fireEvent, render } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import RestaurantMenu from "../RestaurantMenu";
import MOCK_DATA from "../mocks/mockResMenu.json";
import appStore from "../../utils/appStore";
import Header from "../Header";
import Cart from "../Cart";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => Promise.resolve(MOCK_DATA)
    })
})

if ("Should load Restaurant Menu Component", async () => {
    await act(async () => render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
                <Cart/>
                <RestaurantMenu />
            </Provider>
        </BrowserRouter>
    ));

    const accordianHeader = screen.getByText("Biryani (5)");

    fireEvent.click(accordianHeader);;

    expect(screen.getAllByTestId("foodItems").length.toBe(5));

    const addBtns = screen.getAllByRole("button", { name: "Add +" });
    fireEvent.click(addBtns[0]);
    
    expect(screen.getByText("Cart - (1 items)")).toBeInTheDocument;
    expect(screen.getByAllTestId("foodItems").length).toBe(2);
});