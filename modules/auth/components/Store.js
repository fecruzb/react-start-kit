import React from "react";

const Context = React.createContext({});

const Store = ({ children }) => {
  const [store, setStore] = React.useState({
    user: {
      id: 1,
      name: "Felipe",
      email: "dev@fcbueno.com",
    },
  });
  const value = { store, setStore };
  return <Context.Provider value={value}>{children}</Context.Provider>;
};

Store.Context = Context;

export default Store;
