import { Typography } from "@mui/material";
import Json from "../../../components/Json";

const PostView = ({ post }) => (
  <>
    <Typography variant="h4" paragraph>
      {post.title}
    </Typography>

    <Json data={post} />
  </>
);

export default PostView;
