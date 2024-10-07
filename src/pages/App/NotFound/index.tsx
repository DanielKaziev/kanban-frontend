import React, { Suspense } from "react";

const NotFound = React.lazy(() => import("./NotFoundWrapper"));

const LazyNotFound = () => (
  <Suspense fallback={<div />}>
    <NotFound />
  </Suspense>
);

export default LazyNotFound;
