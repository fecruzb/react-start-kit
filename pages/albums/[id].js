import { Box } from "@mui/material";
import Album from "@/album";

const PageAlbumView = ({ album }) => (
  <Box bgcolor="white" p={2}>
    <Album.View album={album} />
  </Box>
);

PageAlbumView.getInitialProps = async ({ query: { id } }) => {
  const album = await Album.api.read(id);
  return { album };
};

export default PageAlbumView;
