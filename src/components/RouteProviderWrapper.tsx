import App from "../pages/App";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { prepareAllRouteObjects } from "../router";

import NotFoundWrapper from "../pages/App/NotFound/NotFoundWrapper";

const RouteProviderWrapper = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      errorElement: <NotFoundWrapper />,
      children: prepareAllRouteObjects(),
    },
  ]);
  return <RouterProvider router={router} />;
};
export default RouteProviderWrapper;
