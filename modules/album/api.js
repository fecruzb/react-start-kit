const list = async () => {
  const url = `https://jsonplaceholder.typicode.com/albums`;
  const data = await fetch(url).then((resonse) => resonse.json());
  return data;
};

const read = async (id) => {
  const url_album = `https://jsonplaceholder.typicode.com/albums/${id}`;
  const album = await fetch(url_album).then((resonse) => resonse.json());

  const url_photos = `https://jsonplaceholder.typicode.com/photos?albumId=${id}`;
  const photos = await fetch(url_photos).then((resonse) => resonse.json());

  return {
    ...album,
    photos,
  };
};

export { read, list };
