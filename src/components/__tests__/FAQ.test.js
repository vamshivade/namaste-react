import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import FAQ from "../FAQ";

describe("FAQ Component Accordion Tests", () => {
  it("Should render FAQ questions and hide answers by default", () => {
    render(<FAQ />);

    expect(screen.getByText("FAQ Accordion")).toBeInTheDocument();
    expect(screen.getByText("What is React?")).toBeInTheDocument();
    expect(screen.getByText("What is JSX?")).toBeInTheDocument();
    expect(screen.getByText("What is useState?")).toBeInTheDocument();

    // Answers should not be visible initially
    expect(screen.queryByText("React is a JavaScript Library.")).not.toBeInTheDocument();
    expect(screen.queryByText("JSX stands for JavaScript XML.")).not.toBeInTheDocument();
  });

  it("Should toggle answer visibility when clicking question", () => {
    render(<FAQ />);

    const questionReact = screen.getByText("What is React?");
    const questionJsx = screen.getByText("What is JSX?");

    // Click "What is React?" -> expands answer
    fireEvent.click(questionReact);
    expect(screen.getByText("React is a JavaScript Library.")).toBeInTheDocument();

    // Click "What is JSX?" -> expands JSX answer and collapses React answer
    fireEvent.click(questionJsx);
    expect(screen.getByText("JSX stands for JavaScript XML.")).toBeInTheDocument();
    expect(screen.queryByText("React is a JavaScript Library.")).not.toBeInTheDocument();

    // Click "What is JSX?" again -> collapses JSX answer
    fireEvent.click(questionJsx);
    expect(screen.queryByText("JSX stands for JavaScript XML.")).not.toBeInTheDocument();
  });
});
