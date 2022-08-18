import Post from "../../modules/post";

const PagePostView = ({ post }) => (
  <>
    <Post.View item={post} />
  </>
);

PagePostView.getInitialProps = async ({ query: { id } }) => {
  const post = await Post.api.get(id);
  return { post };
};

export default PagePostView;
