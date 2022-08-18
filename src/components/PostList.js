import PostItem from "./PostItem";

const PostList = ({ list }) => (
  <ul>
    {list.map((post) => (
      <PostItem key={post.id} item={post} />
    ))}
  </ul>
);

export default PostList;
