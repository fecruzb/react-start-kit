import PostListItem from "./ListItem";

const PostList = ({ list }) => (
  <ul>
    {list.map((post) => (
      <PostListItem key={post.id} item={post} />
    ))}
  </ul>
);

export default PostList;
