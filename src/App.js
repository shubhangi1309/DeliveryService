import React, {lazy, Suspense, useEffect, useState} from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import {createBrowserRouter, Outlet, RouterProvider} from "react-router-dom"
import Error from "./components/Error";
import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestaurantMenu";
import UserContext from "./utils/UserContext";
import {Provider} from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";

const styleCard = {
    backgroundColor: "pink"
}

const About = lazy(() => import("./components/About"));
//this import is a function

const AppLayout = () => {
  const [userName,setUserName] = useState('');
  useEffect(() => {
    const data = {
      loggedInUser: "Lucy Modi"
    }
    setUserName(data.loggedInUser);
  }, [])
    return (
      <Provider store={appStore}>
        {/* // default value of userName outside  */}
        <UserContext.Provider value={{loggedInUser: userName, setUserName}}>
          {/* Lucy Modi of userName outside  */}
          <div className="app">
          {/* <UserContext.Provider value={{loggedInUser: "Shubhangi Modi"}}> */}
            {/* Shubhangi Modi of userName outside  */}
              <Header />
          {/* </UserContext.Provider> */}
              <Outlet />
          </div>
        </UserContext.Provider>
      </Provider>
    )
}

const appRouter = createBrowserRouter([
  {
  path: "/",
  element: <AppLayout/>,
  children: [{
    path: "/",
    element: <Body/>
  },{
    path: "about",
    element: <Suspense fallback={<h1>Loading...</h1>}><About/></Suspense>
  },{
    path: "contact",
    element: <Contact/>
  },{
    path: "restaurants/:resId",
    element: <RestaurantMenu/>
  },{
    path: "cart",
    element: <Cart/>
  }],
  errorElement: <Error/>
}])

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);