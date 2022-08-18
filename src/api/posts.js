// fetch a post by id
export const get = async (id) => {
  const data = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  ).then((resonse) => resonse.json());

  return data;
};

// list all posts from an endpoint
export const list = async () => {
  const data = await fetch(`https://jsonplaceholder.typicode.com/posts`).then(
    (resonse) => resonse.json()
  );

  return data;
};
