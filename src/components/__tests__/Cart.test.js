import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Cart from "../Cart";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { addItem } from "../../utils/cartSlice";

const mockNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockNavigate,
}));

describe("Cart Component Tests", () => {
  const renderCart = () => {
    return render(
      <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
        <Provider store={appStore}>
          <Cart />
        </Provider>
      </BrowserRouter>
    );
  };

  beforeEach(() => {
    jest.clearAllMocks();
    // Dispatch clearStore or clear store state before each test
    // cartSlice doesn't have an action to set state directly, so we can clear it manually
    // via dispatching clearStore or just resetting the store
    appStore.dispatch({ type: "cart/clearStore" });
  });

  it("Should render empty cart message and 'Add Items' button when cart is empty", () => {
    renderCart();

    expect(screen.getByText("Cart is Empty. Add Items to purchase.")).toBeInTheDocument();
    
    const addItemsBtn = screen.getByRole("button", { name: "Add Items" });
    expect(addItemsBtn).toBeInTheDocument();

    // Click "Add Items" should navigate to home
    fireEvent.click(addItemsBtn);
    expect(mockNavigate).toHaveBeenCalledWith("/");
  });

  it("Should render cart items and 'Remove All' button when cart has items", () => {
    // Add mock items to the store (one with price, one with defaultPrice)
    const mockItem = {
      card: {
        info: {
          id: "101",
          name: "Samosa",
          price: 2000,
          imageId: "samosaimg",
          ratings: { aggregatedRating: { rating: 4.5 } },
          description: "Spicy Indian Samosa",
        },
      },
    };
    const mockItem2 = {
      card: {
        info: {
          id: "102",
          name: "Kachori",
          defaultPrice: 1500,
          imageId: "kachoriimg",
        },
      },
    };
    appStore.dispatch(addItem(mockItem));
    appStore.dispatch(addItem(mockItem2));

    renderCart();

    // Samosa and Kachori should be visible
    expect(screen.getByText("Samosa")).toBeInTheDocument();
    expect(screen.getByText("Kachori")).toBeInTheDocument();
    expect(screen.queryByText("Cart is Empty. Add Items to purchase.")).not.toBeInTheDocument();

    const removeAllBtn = screen.getByRole("button", { name: "Remove All" });
    expect(removeAllBtn).toBeInTheDocument();
  });

  it("Should remove a single item from the cart on clicking 'Remove -'", () => {
    const mockItem = {
      card: {
        info: {
          id: "101",
          name: "Samosa",
          price: 2000,
          imageId: "samosaimg",
        },
      },
    };
    appStore.dispatch(addItem(mockItem));

    renderCart();

    expect(screen.getByText("Samosa")).toBeInTheDocument();

    const removeBtn = screen.getByRole("button", { name: "Remove -" });
    fireEvent.click(removeBtn);

    // Cart should be empty now
    expect(screen.queryByText("Samosa")).not.toBeInTheDocument();
    expect(screen.getByText("Cart is Empty. Add Items to purchase.")).toBeInTheDocument();
  });

  it("Should clear all items on clicking 'Remove All'", () => {
    const mockItem = {
      card: {
        info: {
          id: "101",
          name: "Samosa",
          price: 2000,
        },
      },
    };
    const mockItem2 = {
      card: {
        info: {
          id: "102",
          name: "Kachori",
          price: 1500,
        },
      },
    };
    appStore.dispatch(addItem(mockItem));
    appStore.dispatch(addItem(mockItem2));

    renderCart();

    const removeAllBtn = screen.getByRole("button", { name: "Remove All" });
    fireEvent.click(removeAllBtn);

    // Cart should be empty
    expect(screen.queryByText("Samosa")).not.toBeInTheDocument();
    expect(screen.queryByText("Kachori")).not.toBeInTheDocument();
    expect(screen.getByText("Cart is Empty. Add Items to purchase.")).toBeInTheDocument();
  });
});
