import { Box } from "@mui/material";
import User from "../../modules/user";

const PageUserView = ({ user }) => (
  <Box bgcolor="white" p={2}>
    <User.View user={user} />
  </Box>
);

PageUserView.getInitialProps = async ({ query: { id } }) => {
  const user = await User.api.read(id);
  return { user };
};

export default PageUserView;
