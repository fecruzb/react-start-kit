const list = async () => {
  const url = `https://jsonplaceholder.typicode.com/users`;
  const data = await fetch(url).then((resonse) => resonse.json());
  return data;
};

const read = async (id) => {
  const url = `https://jsonplaceholder.typicode.com/users/${id}`;
  const data = await fetch(url).then((resonse) => resonse.json());
  return data;
};

export { list, read };
