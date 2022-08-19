import { Box, Typography } from "@mui/material";
import Album from "@/album";

const PageAlbums = ({ albums }) => (
  <Box bgcolor="white" p={2}>
    <Typography variant="h4" paragraph>
      Albums
    </Typography>

    <Album.List list={albums} />
  </Box>
);

PageAlbums.getInitialProps = async () => {
  const albums = await Album.api.list();
  return { albums };
};

export default PageAlbums;
