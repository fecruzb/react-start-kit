import Link from "next/link";

const PostListItem = ({ post }) => (
  <li>
    <Link href={`/posts/${post.id}`}>
      <a>{post.title}</a>
    </Link>
  </li>
);

export default PostListItem;
