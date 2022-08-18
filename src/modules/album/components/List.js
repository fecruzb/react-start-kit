import AlbumListItem from "./ListItem";

const AlbumList = ({ list }) => (
  <ul>
    {list.map((album) => (
      <AlbumListItem key={album.id} album={album} />
    ))}
  </ul>
);

export default AlbumList;
