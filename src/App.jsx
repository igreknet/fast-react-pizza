import { createBrowserRouter, RouterProvider, createHashRouter } from 'react-router-dom';

import Home from './ui/Home';
import Error from './ui/Error';
import AppLayout from './ui/AppLayout';

import Cart from './features/cart/Cart';
import Menu, { loader as menuLoader } from './features/menu/Menu';
import CreateOrder, { action as createOrderAction } from './features/order/CreateOrder';
import Order, { loader as orderLoader } from './features/order/Order';
import { action as updateOrderAction } from './features/order/UpdateOrder';

const router = createHashRouter([
  {
    path: '/fast-react-pizza',
    element: <AppLayout />,
    errorElement: <Error />,

    children: [
      {
        path: '/fast-react-pizza',
        element: <Home />,
      },
      {
        path: '/fast-react-pizza/menu',
        element: <Menu />,
        loader: menuLoader, //connect loader to route
        errorElement: <Error />,
      },
      {
        path: '/fast-react-pizza/cart',
        element: <Cart />,
      },
      {
        path: '/fast-react-pizza/order/new',
        element: <CreateOrder />,
        action: createOrderAction,
      },
      {
        path: '/fast-react-pizza/order/:orderId',
        element: <Order />,
        loader: orderLoader,
        errorElement: <Error />,
        action: updateOrderAction,
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} basename="/fast-react-pizza/" />;
}
