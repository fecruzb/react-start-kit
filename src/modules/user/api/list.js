const list = async () => {
  const url = `https://jsonplaceholder.typicode.com/users`;
  const data = await fetch(url).then((resonse) => resonse.json());
  return data;
};

export default list;
