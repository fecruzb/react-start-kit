import api from "../../api";

const PagePost = ({ post }) => (
  <div className="page-post">
    <h3>{post.title}</h3>
    <p>{post.body}</p>
  </div>
);

PagePost.getInitialProps = async ({ query: { id } }) => {
  const post = await api.posts.get(id);
  return { post };
};

export default PagePost;
