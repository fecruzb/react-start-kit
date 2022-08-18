import { Typography } from "@mui/material";
import User from "../../modules/user";

const PageUsers = ({ users }) => (
  <>
    <Typography variant="h4" paragraph>
      Users
    </Typography>

    <User.List list={users} />
  </>
);

PageUsers.getInitialProps = async () => {
  const users = await User.api.list();
  return { users };
};

export default PageUsers;
