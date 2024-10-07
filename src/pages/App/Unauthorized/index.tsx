import React, { Suspense } from "react";

const Unauthorized = React.lazy(() => import("./Unauthorized"));

const LazyUnauthorized = () => (
  <Suspense fallback={<div />}>
    <Unauthorized />
  </Suspense>
);

export default LazyUnauthorized;
