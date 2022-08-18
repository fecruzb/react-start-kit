import { Typography } from "@mui/material";
import Album from "../../modules/album";

const PageAlbums = ({ albums }) => (
  <>
    <Typography variant="h4" paragraph>
      Albums
    </Typography>

    <Album.List list={albums} />
  </>
);

PageAlbums.getInitialProps = async () => {
  const albums = await Album.api.list();
  return { albums };
};

export default PageAlbums;
