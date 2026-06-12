import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Error from "../Error";
import { useRouteError } from "react-router-dom";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useRouteError: jest.fn(),
}));

describe("Error Component Tests", () => {
  it("should render error message with status and statusText", () => {
    useRouteError.mockReturnValue({
      status: 404,
      statusText: "Not Found",
    });

    render(<Error />);

    expect(screen.getByText("Oops!!")).toBeInTheDocument();
    expect(screen.getByText("Something went wrong.")).toBeInTheDocument();
    expect(screen.getByText("404 : Not Found")).toBeInTheDocument();
  });

  it("should fallback to default values when status and statusText are missing", () => {
    useRouteError.mockReturnValue({
      message: "Internal error occurred",
    });

    render(<Error />);

    expect(screen.getByText("Oops!!")).toBeInTheDocument();
    expect(screen.getByText("Error : Internal error occurred")).toBeInTheDocument();
  });
});
