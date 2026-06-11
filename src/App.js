import React, { useState, useEffect, lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Error from "./components/Error";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Shimmer from "./components/Shimmer";
import UserContext from "./utils/UserContext";
import Cart from "./components/Cart";

import appStore from "./utils/appStore";
import { Provider } from "react-redux";

const Contact = lazy(() => import("./components/Contact"));
const RestaurantMenu = lazy(() => import("./components/RestaurantMenu"));
const FAQ = lazy(() => import("./components/FAQ"));

const AppLayout = () => {
  const [userName, setUserName] = useState("");

  // authentication
  useEffect(() => {
    const data = {
      name: "Vamshi Vade",
    };
    setUserName(data.name);
  }, []);

  return (
    <Provider store={appStore}>
      <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
        <div className="App">
          <Header />
          <Outlet />
        </div>
      </UserContext.Provider>
    </Provider>
  );
};

const SuspenseLayout = () => {
  return (
    <Suspense fallback={<Shimmer />}>
      <Outlet />
    </Suspense>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        element: <SuspenseLayout />,
        children: [
          {
            path: "/contact",
            element: <Contact />,
          },
          {
            path: "/restaurant/:resId",
            element: <RestaurantMenu />,
          },
          {
            path: "/faq",
            element: <FAQ />,
          },
        ],
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
