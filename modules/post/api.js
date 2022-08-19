const list = async () => {
  const url = `https://jsonplaceholder.typicode.com/posts`;
  const data = await fetch(url).then((resonse) => resonse.json());
  return data;
};

const read = async (id) => {
  const url = `https://jsonplaceholder.typicode.com/posts/${id}`;
  const data = await fetch(url).then((resonse) => resonse.json());
  return data;
};

export { read, list };
