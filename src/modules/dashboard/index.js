import * as api from "./api";
import * as components from "./components";
import * as charts from "./charts";

const Dashboard = {
  ...components,
  ...charts,
  api,
};

export default Dashboard;
