import UserListItem from "./ListItem";

const UserList = ({ list }) => (
  <ul>
    {list.map((user) => (
      <UserListItem key={user.id} user={user} />
    ))}
  </ul>
);

export default UserList;
