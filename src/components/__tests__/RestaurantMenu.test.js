import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import RestaurantMenu from "../RestaurantMenu";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";

describe("RestaurantMenu Component Tests", () => {
  const renderComponent = () => {
    return render(
      <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
        <Provider store={appStore}>
          <RestaurantMenu />
        </Provider>
      </BrowserRouter>
    );
  };

  it("Should render restaurant info accordion header details", () => {
    renderComponent();

    // Verify the restaurant name is rendered
    expect(screen.getByText("Barbeque Nation")).toBeInTheDocument();
    expect(screen.getByText("₹600 for two")).toBeInTheDocument();
    expect(screen.getByText(/North Indian, Barbecue/)).toBeInTheDocument();
  });

  it("Should toggle item categories inside the menu and render items on click", () => {
    renderComponent();

    // The categories are Accordion sections in the menu (e.g., "Recommended (18)")
    const categoryHeader = screen.getByText(/Recommended/);
    expect(categoryHeader).toBeInTheDocument();

    // Items list is hidden initially
    expect(screen.queryByText("Barbeque in a Box (Non Veg) Premium")).not.toBeInTheDocument();

    // Click Category Header to expand items list
    fireEvent.click(categoryHeader);
    expect(screen.getByText("Barbeque in a Box (Non Veg) Premium")).toBeInTheDocument();

    // Click Category Header again to collapse items list
    fireEvent.click(categoryHeader);
    expect(screen.queryByText("Barbeque in a Box (Non Veg) Premium")).not.toBeInTheDocument();
  });

  it("Should dispatch addItem action when 'Add +' is clicked", () => {
    renderComponent();

    const categoryHeader = screen.getByText(/Recommended/);
    fireEvent.click(categoryHeader);

    // Find the add buttons
    const addBtns = screen.getAllByRole("button", { name: "Add +" });
    expect(addBtns.length).toBeGreaterThan(0);

    // Click "Add +" on the first item
    fireEvent.click(addBtns[0]);
    
    // In our appStore, the cart items should be updated.
    const cartState = appStore.getState().cart.items;
    expect(cartState.length).toBeGreaterThan(0);
  });

  it("Should render RestaurantMenuCard with default item count 0 when itemList is undefined", () => {
    // Import inside test or use the existing top level imports if imported there
    const RestaurantMenuCard = require("../RestaurantMenuCard").default;
    render(
      <RestaurantMenuCard
        resMenuData={{ title: "Test Category", categoryId: "test_cat" }}
        itemList={undefined}
        expandItem={false}
        setExpandItem={jest.fn()}
      />
    );
    expect(screen.getByText("Test Category (0)")).toBeInTheDocument();
  });
});
