const list = async () => {
  const url = `https://jsonplaceholder.typicode.com/albums`;
  const data = await fetch(url).then((resonse) => resonse.json());
  return data;
};

export default list;
