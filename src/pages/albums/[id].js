import Album from "../../modules/album";

const PageAlbumView = ({ album }) => (
  <>
    <Album.View album={album} />
  </>
);

PageAlbumView.getInitialProps = async ({ query: { id } }) => {
  const album = await Album.api.read(id);
  return { album };
};

export default PageAlbumView;
