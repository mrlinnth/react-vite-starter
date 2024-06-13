import Home from '@/pages/home';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './Layout';

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    // errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />
      }
      // {
      //   path: 'orders/:orderId',
      //   element: <Guard component={<OrderDetails />} />,
      //   loader: orderDetailsLoader
      // }
    ]
  }
]);

function Router() {
  return <RouterProvider router={routes} />;
}

export default Router;
