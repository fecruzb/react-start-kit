const login = async (email, password) => {
  const url = `https://jsonplaceholder.typicode.com/users`;
  const data = await fetch(url).then((resonse) => resonse.json());
  return data[0];
};

export { login };
