import Link from "next/link";

const PostItem = ({ item }) => (
  <li>
    <Link href={`/posts/${item.id}`}>
      <a>{item.title}</a>
    </Link>
  </li>
);

export default PostItem;
