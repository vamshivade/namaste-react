import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Body from "../Body";
import { BrowserRouter } from "react-router-dom";
import UserContext from "../../utils/UserContext";
import useRestaurant from "../../utils/useRestaurant";

jest.mock("../../utils/useRestaurant", () => {
  const originalModule = jest.requireActual("../../utils/useRestaurant");
  return {
    __esModule: true,
    default: jest.fn().mockImplementation(() => originalModule.default()),
  };
});

const mockContextValue = {
  loggedInUser: "Default User",
  setUserName: jest.fn(),
};

const renderBody = () => {
  return render(
    <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <UserContext.Provider value={mockContextValue}>
        <Body />
      </UserContext.Provider>
    </BrowserRouter>
  );
};

describe("Body Component Tests", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("Should render Shimmer component initially", () => {
    // Mock the hook to return loading state
    useRestaurant.mockReturnValueOnce({
      restaurants: [],
      allRestaurants: [],
      loading: true,
      setRestaurants: jest.fn(),
      setAllRestaurants: jest.fn(),
      setLoading: jest.fn(),
    });

    const { container } = renderBody();
    const shimmerCards = container.getElementsByClassName("shimmer-card");
    expect(shimmerCards.length).toBe(8);
  });

  it("Should render restaurant cards after loading", async () => {
    renderBody();

    // Wait for mock restaurant list data to load (Shimmer to disappear)
    const pizzaHutCard = await screen.findByText("Pizza Hut");
    expect(pizzaHutCard).toBeInTheDocument();

    const resCards = screen.getAllByAltText("resImage");
    expect(resCards.length).toBe(8); // Total 8 restaurants in mockRestaurantsList
  });

  it("Should filter restaurants on search input click", async () => {
    renderBody();
    await screen.findByText("Pizza Hut");

    const searchInput = screen.getByPlaceholderText("Enter name to search ...");
    const searchBtn = screen.getByRole("button", { name: "Search" });

    // Type "Chinese" into search input and click search
    fireEvent.change(searchInput, { target: { value: "Chinese" } });
    fireEvent.click(searchBtn);

    // Verify "Chinese Wok" is visible and others are not
    const chineseWok = await screen.findByText("Chinese Wok");
    expect(chineseWok).toBeInTheDocument();
    expect(screen.queryByText("Pizza Hut")).not.toBeInTheDocument();
  });

  it("Should filter top rated restaurants (> 4.2 rating)", async () => {
    renderBody();
    await screen.findByText("Pizza Hut");

    const topRatedBtn = screen.getByRole("button", { name: "Top Rated Restaurants" });

    // Click Top Rated Restaurants button
    fireEvent.click(topRatedBtn);

    // Only restaurants with rating > 4.2 should render (ITC Aashirvaad has 4.5, GharSe has 4.3)
    const itcCard = await screen.findByText("ITC Aashirvaad Soul Creations");
    expect(itcCard).toBeInTheDocument();

    const gharSeCard = await screen.findByText(/GharSe/);
    expect(gharSeCard).toBeInTheDocument();

    // Pizza Hut (4.2) and Chinese Wok (4.0) should be hidden
    expect(screen.queryByText("Pizza Hut")).not.toBeInTheDocument();
    expect(screen.queryByText("Chinese Wok")).not.toBeInTheDocument();
  });

  it("Should reset the search and filter when Reset is clicked", async () => {
    renderBody();
    await screen.findByText("Pizza Hut");

    const searchInput = screen.getByPlaceholderText("Enter name to search ...");
    const searchBtn = screen.getByRole("button", { name: "Search" });
    const resetBtn = screen.getByRole("button", { name: "Reset" });

    // Filter list to "Chinese Wok"
    fireEvent.change(searchInput, { target: { value: "Chinese" } });
    fireEvent.click(searchBtn);
    expect(await screen.findByText("Chinese Wok")).toBeInTheDocument();
    expect(screen.queryByText("Pizza Hut")).not.toBeInTheDocument();

    // Click Reset
    fireEvent.click(resetBtn);

    // All 8 cards should be visible again
    expect(await screen.findByText("Pizza Hut")).toBeInTheDocument();
    expect(screen.getByText("Chinese Wok")).toBeInTheDocument();
    expect(searchInput.value).toBe("");
  });

  it("Should display 'No Restaurants Found' for non-matching search", async () => {
    renderBody();
    await screen.findByText("Pizza Hut");

    const searchInput = screen.getByPlaceholderText("Enter name to search ...");
    const searchBtn = screen.getByRole("button", { name: "Search" });

    // Search for non-existent restaurant name
    fireEvent.change(searchInput, { target: { value: "xyzabc" } });
    fireEvent.click(searchBtn);

    // Verify error message
    const noResMessage = await screen.findByText("No Restaurants Found");
    expect(noResMessage).toBeInTheDocument();
  });

  it("Should update user context username when changing context input", async () => {
    renderBody();
    await screen.findByText("Pizza Hut");

    const contextInput = screen.getByPlaceholderText("enter name to change");

    // Change username context input value
    fireEvent.change(contextInput, { target: { value: "New User Name" } });

    // Verify context setter is called with correct name
    expect(mockContextValue.setUserName).toHaveBeenCalledWith("New User Name");
  });
});