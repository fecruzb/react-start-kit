import Link from "next/link";

const PostListItem = ({ item }) => (
  <li>
    <Link href={`/posts/${item.id}`}>
      <a>{item.title}</a>
    </Link>
  </li>
);

export default PostListItem;
