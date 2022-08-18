import Post from "../../modules/post";

const PagePostView = ({ post }) => (
  <>
    <Post.View post={post} />
  </>
);

PagePostView.getInitialProps = async ({ query: { id } }) => {
  const post = await Post.api.read(id);
  return { post };
};

export default PagePostView;
