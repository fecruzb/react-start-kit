import { Typography } from "@mui/material";
import App from "@/app";

const PostView = ({ post }) => (
  <>
    <Typography variant="h4" paragraph>
      {post.title}
    </Typography>

    <App.Json data={post} />
  </>
);

export default PostView;
