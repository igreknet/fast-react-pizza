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
    path: '/fast-react-pizza/',
    element: <AppLayout />,
    errorElement: <Error />,

    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/menu',
        element: <Menu />,
        loader: menuLoader, //connect loader to route
        errorElement: <Error />,
      },
      {
        path: '/cart',
        element: <Cart />,
      },
      {
        path: '/order/new',
        element: <CreateOrder />,
        action: createOrderAction,
      },
      {
        path: '/order/:orderId',
        element: <Order />,
        loader: orderLoader,
        errorElement: <Error />,
        action: updateOrderAction,
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
