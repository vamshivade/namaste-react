import Header from "../Header";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";

it("Should load the Header component", () => {
  render(
    <BrowserRouter
      future={{ v7_startTransition: true, v7_relativeSplatPath: true }}
    >
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>,
  );

  const homeText = screen.getByText("Home");
  expect(homeText).toBeInTheDocument();
});

it("Should toggle the login/logout button on click", () => {
  render(
    <BrowserRouter
      future={{ v7_startTransition: true, v7_relativeSplatPath: true }}
    >
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>,
  );

  const loginButton = screen.getByRole("button", { name: "Login" });
  expect(loginButton).toBeInTheDocument();

  // Click Login -> changes to Logout
  fireEvent.click(loginButton);
  const logoutButton = screen.getByRole("button", { name: "Logout" });
  expect(logoutButton).toBeInTheDocument();

  // Click Logout -> changes back to Login
  fireEvent.click(logoutButton);
  const backToLoginButton = screen.getByRole("button", { name: "Login" });
  expect(backToLoginButton).toBeInTheDocument();
});

it("Should show online/offline status", () => {
  render(
    <BrowserRouter
      future={{ v7_startTransition: true, v7_relativeSplatPath: true }}
    >
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>,
  );

  const statusText = screen.getByText(/Online Status/i);
  expect(statusText).toHaveTextContent("🟢");

  fireEvent(window, new Event("offline"));
  expect(statusText).toHaveTextContent("🔴");

  fireEvent(window, new Event("online"));
  expect(statusText).toHaveTextContent("🟢");
});
