import { render,screen } from "@testing-library/react";
import RestaurantCard from "../RestaurantCard";
import MockData from "../mocks/resCardMock.json";
import "@testing-library/jest-dom";


// PART 7 e-13
if("Should render restaurant card component with props data", () => {
    render(<RestaurantCard resData={MockData} />);

    const name = screen.getByText("Domino's Pizza");

    expect(name).toBeInTheDocument();
});

if("Should render restaurant card with promoted label ", () => {
    // HOMEWORK
});

 