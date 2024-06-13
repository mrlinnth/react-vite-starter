import Error from '@/Error';
import Guard from '@/Guard';
import Layout from '@/Layout';
import Home from '@/pages/home';
import Playground from '@/pages/playground';
import Profile from '@/pages/profile';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: 'playground',
        element: <Playground />
      },
      {
        path: 'profile/:name',
        element: <Guard component={<Profile />} />
      }
    ]
  }
]);

export default function Router() {
  return <RouterProvider router={routes} />;
}
