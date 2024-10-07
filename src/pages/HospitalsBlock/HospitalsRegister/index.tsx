import React, { Suspense } from "react";

const HospitalsRegister = React.lazy(() => import("./HospitalsRegister"));

const LazyHospitalsRegister = () => (
  <Suspense fallback={<></>}>
    <HospitalsRegister />
  </Suspense>
);

export default LazyHospitalsRegister;
