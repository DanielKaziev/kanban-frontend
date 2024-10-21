import App from "../pages/App";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { prepareAllRouteObjects } from "../router";
import LazyNotFound from "../pages/App/NotFound";

const RouteProviderWrapper = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      errorElement: <LazyNotFound />,
      children: prepareAllRouteObjects(),
    },
  ]);
  return <RouterProvider router={router} />;
};
export default RouteProviderWrapper;
