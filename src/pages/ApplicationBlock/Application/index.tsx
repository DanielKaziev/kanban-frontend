import React, { Suspense } from "react";

const Application = React.lazy(() => import("./Application"));

const LazyApplication = () => (
  <Suspense fallback={<div />}>
    <Application />
  </Suspense>
);

export default LazyApplication;
