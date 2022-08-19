import { Box, Grid } from "@mui/material";
import Dashboard from "../modules/dashboard";

const PageHome = () => (
  <Box>
    <Grid container spacing={2}>
      <Grid item xs={6}>
        <Dashboard.Widget title={"My PieChart"}>
          <Dashboard.PieChart />
        </Dashboard.Widget>
      </Grid>
      <Grid item xs={6}>
        <Dashboard.Widget title={"My BarChart"}>
          <Dashboard.BarChart />
        </Dashboard.Widget>
      </Grid>
      <Grid item xs={12}>
        <Dashboard.Widget title={"My StackedBar"}>
          <Dashboard.StackedBar />
        </Dashboard.Widget>
      </Grid>
    </Grid>
  </Box>
);

export default PageHome;
