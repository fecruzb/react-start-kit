import Link from "next/link";
import api from "../../api";

const PagePosts = ({ posts }) => (
  <div className="page-posts">
    <h2>Posts</h2>
    <div className="posts">
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link href={`/posts/${post.id}`}>
              <a>{post.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

PagePosts.getInitialProps = async () => {
  const posts = await api.posts.list();
  return { posts };
};

export default PagePosts;
