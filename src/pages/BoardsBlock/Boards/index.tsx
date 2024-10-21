import React, { Suspense } from "react";

const Boards = React.lazy(() => import("./Boards"));

const LazyBoards = () => (
  <Suspense fallback={<></>}>
    <Boards />
  </Suspense>
);

export default LazyBoards;
