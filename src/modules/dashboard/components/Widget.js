import { Box, Typography } from "@mui/material";

const ChartRevenue = ({ children, title }) => (
  <Box bgcolor="white" p={2}>
    <Typography variant="h6">{title}</Typography>
    <hr />
    <Box height="250px">{children}</Box>
  </Box>
);

export default ChartRevenue;
