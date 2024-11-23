import { RouteObject } from "react-router-dom";
import PATHS, { TPathEntry } from "./paths";
import useTokenData from "../hooks/useTokenData";

type RouteEntriesObject = RouteObject & {
  roles?: string[];
};

export const prepareRouteObjects = (pathEntry: TPathEntry, roles: string | undefined): RouteObject[] => {
  const Component = pathEntry.component;
  const entries: RouteEntriesObject[] = [
    {
      path: pathEntry.path,
      element: <Component />,
      roles: pathEntry.roles,
    },
  ];
  pathEntry.children?.forEach((childEntry) => {
    const rolesInclude = childEntry.roles.every(
      (role) => roles?.includes(role)
    );
    if (rolesInclude) {
      entries.push(...prepareRouteObjects(childEntry, roles));
    }
  });
  return entries;
};

export const prepareAllRouteObjects = () => {
  const routeObjects: Array<RouteEntriesObject> = [];
  const data = useTokenData()

  PATHS.forEach((pathEntry) => {
    let rolesInclude = false
    if (pathEntry.roles.length === 0) {
      rolesInclude = true
    } else {
      rolesInclude = pathEntry.roles.some(
        (role)=>data?.role == role
      )
    }
    if (rolesInclude) {
      routeObjects.push(...prepareRouteObjects(pathEntry, data?.role));
    }
  });
  return routeObjects;
};

export const getFirstPagePath = () => {
  const allRoutes = prepareAllRouteObjects();
  if (allRoutes.length > 0) {
    for (let i = 0; i < allRoutes.length; i++) {
      const route = allRoutes[i].path;
      if (route && !route.includes(":")) {
        return route;
      }
    }
  }
};
