import React from "react";
import { styled } from "@mui/material";
import Skeleton from "@mui/material/Skeleton";
import Box from "@mui/material/Box";

const StyledBox = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2),
  width: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: "4px",
  border: "none",
}));

const SkeletonComponent = ({ width, height }) => {
  return (
    <StyledBox>
      <Skeleton
        sx={{ bgcolor: "grey.500" }}
        variant="rectangular"
        width={width}
        height={height}
      />
    </StyledBox>
  );
};

export default SkeletonComponent;
