import { fireEvent, render, screen } from "@testing-library/react"
import Body from "../Body";
import MOCK_DATA from "../../components/mocks/mockRestListData.json";
import { act } from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";

global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => {
            return Promise.resolve(MOCK_DATA);
        }
    })
})

it("Should render the Body component with Search", async () => {
    await act(async () => render(
        <BrowserRouter>
            <Body />
        </BrowserRouter>)
        );

   const searchBtn = screen.getByRole("button", {name: "Search"});

   const searchInput = screen.getByTestId("searchInput");

   fireEvent.change(searchInput, { target: {value: "burger"}});

   fireEvent.click(searchBtn);

   expect(searchBtn).toBeInTheDocument();

   //screen should load n # of cards
   const cards = screen.getAllByTestId("resCard");
   expect(cards.length).toBe(2);

})

it("Should filter top rated restaurant", async () => {
    await act(async () => render(
        <BrowserRouter>
            <Body />
        </BrowserRouter>)
        );

   const cards = screen.getAllByTestId("resCard");
   expect(cards.length).toBe(20);
   const topRatedRestBtn = screen.getByRole("button", {name: "Top Rated Restaurants"});
   fireEvent.click(topRatedRestBtn);
   const topRatedRest = screen.getAllByTestId("resCard");
   expect(topRatedRest.length).toBe(19);

})