import PostListItem from "./ListItem";

const PostList = ({ list }) => (
  <ul>
    {list.map((post) => (
      <PostListItem key={post.id} post={post} />
    ))}
  </ul>
);

export default PostList;
