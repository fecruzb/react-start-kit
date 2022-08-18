import { Typography, Grid } from "@mui/material";

const AlbumView = ({ album }) => (
  <>
    <Typography variant="h4" paragraph>
      {album.title}
    </Typography>

    <Grid container spacing={2}>
      {album.photos.map((photo) => (
        <Grid key={photo.id} item sx={1}>
          <img src={photo.thumbnailUrl} alt="" width="100px" height="100px" />
        </Grid>
      ))}
    </Grid>
  </>
);

export default AlbumView;
