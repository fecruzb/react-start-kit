import { Typography } from "@mui/material";

const PostView = ({ post }) => (
  <>
    <Typography variant="h4" paragraph>
      {post.title}
    </Typography>

    <Typography>{post.body}</Typography>
  </>
);

export default PostView;
