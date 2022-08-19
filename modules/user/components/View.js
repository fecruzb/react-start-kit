import { Typography } from "@mui/material";
import App from "@/app";

const UserView = ({ user }) => (
  <>
    <Typography variant="h4" paragraph>
      {user.name}
    </Typography>

    <App.Json data={user} />
  </>
);

export default UserView;
