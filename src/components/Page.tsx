import { PropsWithChildren } from "react";
import { alpha, styled } from "@mui/material/styles";
import Stack from "@mui/material/Stack";

export interface IPageProps {
  noSpacing?: boolean;
}

const PageContainer = styled(Stack)(({ theme }) => ({
  margin: theme.spacing(3),
  flexGrow: 1,
  overflow: "auto",
}));

const Page = ({ children, noSpacing }: PropsWithChildren<IPageProps>) => (
  <PageContainer spacing={noSpacing ? 0 : 3}>{children}</PageContainer>
);

export default Page;
