import React from "react";
import ReactDOM from "react-dom/client";

import Header from "./components/Header.js";
import Body from "./components/Body.js"


//Routing
import { createBrowserRouter, RouterProvider, Outlet } from "react-router";

import RestauarantMenu from "./components/RestauarantMenu.js";
import About from "./components/About.js";
import Contact from "./components/Contact.js";
import Error from "./components/Error.js";
import RestauarantMenu from "./components/RestauarantMenu.js";

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      {/* <Body /> */}
      <Outlet />
    </div>
  );
}


const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />
      },
      {
        path: "/menu/:id",
        element: <RestauarantMenu />
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/contact",
        element: <Contact />
      },
      {
        path: "/restaurants/:resId",
        element: <RestauarantMenu />
      }
    ],
    errorElement: <Error />,
  },
])



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);


// data.cards[4].groupedCard.cardGroupMap.REGULAR.cards