import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./ui/appLayout";
import Home from "./ui/homePage";
import Error from "./ui/error";
import Menu from "./features/menu/menu";
import { loader as menuLoader } from "./features/menu/menuLoader";
import Cart from "./features/cart/cart";
import CreateOrder from "./features/order/createOrder";
import Order from "./features/order/order";
import { loader as orderLoader } from "./features/order/orderLoader";
import { action as createOrderAction } from "./features/order/orderAction";

const router = createBrowserRouter([
  {
    //Layout route
    element: <AppLayout />,
    // Error from anywhere in the app bubbles up to this place. error like using a wrong path would make the error display only in the <Outlet/> part of the <AppLayout/> component. while error from fetching data just like we are doing with the <menu/> component will result in the whole app display only the error not the <Outlet/> part of the <AppLayout/> hence, we have to add the errorElement to the /menu path below
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/menu",
        element: <Menu />,
        loader: menuLoader,
        errorElement: <Error />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/order/new",
        element: <CreateOrder />,
        action: createOrderAction,
      },
      {
        path: "/order/:orderId",
        element: <Order />,
        loader: orderLoader,
        errorElement: <Error />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
