import { Stack } from "@mui/material";
import Header from "../../../components/Header";
import React, { Suspense } from "react";

const Board = React.lazy(() => import("./Board"));

const LazyControleBoard = () => (
  <Stack height={"100vh"}>
    <Header />
    <Suspense fallback={<div></div>}>
      <Board />
    </Suspense>
  </Stack>
);

export default LazyControleBoard;
