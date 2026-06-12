import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import About from "../About";
import User from "../User";
import UserClass from "../UserClass";
import UserContext from "../../utils/UserContext";

const mockContextValue = {
  loggedInUser: "Test User",
};

describe("About page, User, and UserClass tests", () => {
  it("Should render About page with UserContext name and UserClass component", () => {
    render(
      <UserContext.Provider value={mockContextValue}>
        <About />
      </UserContext.Provider>,
    );

    // Verify About page context text
    expect(screen.getByText("About page Test User")).toBeInTheDocument();

    // Verify UserClass (rendered inside About) props and state
    expect(screen.getByText("class component")).toBeInTheDocument();
    expect(screen.getByText("Name: Vamshi Vade")).toBeInTheDocument();
    expect(screen.getByText("Location: Hyderabad")).toBeInTheDocument();
    expect(screen.getByText("Contact: @vamshivade")).toBeInTheDocument();
  });

  it("Should increment count and count2 on button click in UserClass", () => {
    render(
      <UserClass
        method="class component"
        name="Vamshi Vade"
        location="Hyderabad"
        contact="@vamshivade"
      />,
    );

    const countText = screen.getByText(/count:/);
    expect(countText).toHaveTextContent("count: 0 count2 : 1");

    const clickBtn = screen.getByRole("button", { name: "Click" });
    fireEvent.click(clickBtn);

    expect(countText).toHaveTextContent("count: 1 count2 : 2");
  });

  it("Should render User functional component and handle state counts", () => {
    render(
      <User
        method="functional component"
        name="Vamshi Vade"
        location="Hyderabad"
        contact="@vamshivade"
      />,
    );

    expect(screen.getByText("functional component")).toBeInTheDocument();
    expect(screen.getByText("count: 0")).toBeInTheDocument();
    expect(screen.getByText("count2: 2")).toBeInTheDocument();

    const countBtn = screen.getByRole("button", { name: "Count +" });
    const count2Btn = screen.getByRole("button", { name: "Count2 +" });

    fireEvent.click(countBtn);
    expect(screen.getByText("count: 1")).toBeInTheDocument();

    fireEvent.click(count2Btn);
    expect(screen.getByText("count2: 4")).toBeInTheDocument();
  });
});
