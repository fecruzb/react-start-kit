import React from "react";

const Context = React.createContext({});

const Store = ({ children }) => {
  const [store, setStore] = React.useState({});
  const value = { store, setStore };

  return <Context.Provider value={value}>{children}</Context.Provider>;
};

Store.Context = Context;

export default Store;
