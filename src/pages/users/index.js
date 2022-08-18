import { Box, Typography } from "@mui/material";
import User from "../../modules/user";

const PageUsers = ({ users }) => (
  <Box bgcolor="white" p={2}>
    <Typography variant="h4" paragraph>
      Users
    </Typography>

    <User.List list={users} />
  </Box>
);

PageUsers.getInitialProps = async () => {
  const users = await User.api.list();
  return { users };
};

export default PageUsers;
