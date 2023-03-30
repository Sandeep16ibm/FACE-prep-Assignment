import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import { BrowserRouter } from "react-router-dom";
import Header from "../components/Header";

test("renders Header component with MyApp title and Logout button", () => {
  const setLoggedIn = jest.fn();

  render(
    <BrowserRouter>
      <Header />
    </BrowserRouter>
  );

  const titleElement = screen.getByText(/MyApp/i);
  const logoutButton = screen.getByText(/Logout/i);

  expect(titleElement).toBeInTheDocument();
  expect(logoutButton).toBeInTheDocument();
});
