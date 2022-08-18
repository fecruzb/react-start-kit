import { Typography } from "@mui/material";
import Json from "../../../components/Json";

const UserView = ({ user }) => (
  <>
    <Typography variant="h4" paragraph>
      {user.name}
    </Typography>

    <Json data={user} />
  </>
);

export default UserView;
