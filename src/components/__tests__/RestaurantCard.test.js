import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import RestaurantCard, { withPromotedlabel } from "../RestaurantCard";

const mockRestaurantData = {
  cloudinaryImageId: "abc123img",
  name: "Burger King",
  avgRating: 4.3,
  sla: { slaString: "25-30 mins" },
  cuisines: ["Burgers", "Fast Food"],
  areaName: "Himayatnagar",
  costForTwo: "₹300 for two",
};

describe("RestaurantCard Component Tests", () => {
  it("Should render RestaurantCard with props data", () => {
    render(<RestaurantCard restaurantData={mockRestaurantData} />);

    expect(screen.getByText("Burger King")).toBeInTheDocument();
    expect(screen.getByText("₹300 for two")).toBeInTheDocument();
    expect(screen.getByText("⭐ 4.3 • 25-30 mins")).toBeInTheDocument();
    expect(screen.getByText("Burgers, Fast Food")).toBeInTheDocument();
    expect(screen.getByText("Himayatnagar")).toBeInTheDocument();
  });

  it("Should render RestaurantCard with Promoted label HOC wrapper", () => {
    const PromotedCard = withPromotedlabel(RestaurantCard);
    render(<PromotedCard restaurantData={mockRestaurantData} />);

    // Verify "Best Choice" label is rendered
    expect(screen.getByText("Best Choice")).toBeInTheDocument();

    // Verify card contents are also rendered
    expect(screen.getByText("Burger King")).toBeInTheDocument();
  });
});
