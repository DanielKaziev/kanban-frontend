import React, { Suspense } from "react";

const Authorized = React.lazy(() => import("./Authorized"));

const LazyAuthorized = () => (
  <Suspense fallback={<div />}>
    <Authorized />
  </Suspense>
);

export default LazyAuthorized;
