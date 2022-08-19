import Link from "next/link";

const UserListItem = ({ user }) => (
  <li>
    <Link href={`/users/${user.id}`}>
      <a>{user.name}</a>
    </Link>
  </li>
);

export default UserListItem;
