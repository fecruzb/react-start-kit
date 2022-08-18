import { Box, Container } from "@mui/material";

const Page = ({ children }) => (
  <Container>
    <Box my={2}>{children}</Box>
  </Container>
);

export default Page;
