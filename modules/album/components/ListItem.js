import Link from "next/link";

const AlbumListItem = ({ album }) => (
  <li>
    <Link href={`/albums/${album.id}`}>
      <a>{album.title}</a>
    </Link>
  </li>
);

export default AlbumListItem;
