import { PropsWithChildren } from "react";
import { alpha, styled } from "@mui/material/styles";
import Stack from "@mui/material/Stack";

export interface IPageProps {
  fullHeight?: boolean;
}

const PageContainer = styled(Stack)(({ theme }) => ({
  margin: theme.spacing(3),
  flexGrow: 1,
  alignItems: "center",
}));

const Page = ({ children }: PropsWithChildren<IPageProps>) => (
  <PageContainer spacing={3}>{children}</PageContainer>
);

export default Page;
