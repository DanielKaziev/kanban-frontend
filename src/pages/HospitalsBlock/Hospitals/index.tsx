import React, { Suspense } from "react";

const Hospitals = React.lazy(() => import("./Hospitals"));

const LazyHospitals = () => (
  <Suspense fallback={<></>}>
    <Hospitals />
  </Suspense>
);

export default LazyHospitals;
