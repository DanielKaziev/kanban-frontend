import React, { Suspense } from "react";

const ApplicationView = React.lazy(() => import("./ApplicationView"));

const LazyApplicationView = () => (
  <Suspense fallback={<div />}>
    <ApplicationView />
  </Suspense>
);

export default LazyApplicationView;
