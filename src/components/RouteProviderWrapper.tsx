import App from "../pages/App";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { prepareAllRouteObjects } from "../router";
import LazyNotFound from "../pages/App/NotFound";
import LazyControleBoard from "../pages/BoardsBlock/ControlBoard";

const RouteProviderWrapper = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      errorElement: <LazyNotFound />,
      children: prepareAllRouteObjects(),
    },
    {
      path: "/boards/:id",
      element: <LazyControleBoard />,
      errorElement: <LazyNotFound />,
    },
  ]);
  return <RouterProvider router={router} />;
};
export default RouteProviderWrapper;
