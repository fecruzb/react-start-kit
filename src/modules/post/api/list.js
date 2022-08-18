const list = async (id) => {
  const url = `https://jsonplaceholder.typicode.com/posts`;
  const data = await fetch(url).then((resonse) => resonse.json());
  return data;
};

export default list;
