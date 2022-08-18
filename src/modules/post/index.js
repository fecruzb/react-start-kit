/* Components */
import List from "./components/List";
import ListItem from "./components/ListItem";
import View from "./components/View";

/* API */
import read from "./api/read";
import list from "./api/list";

const api = {
  read,
  list,
};

const Post = {
  List,
  ListItem,
  View,
  api,
};

export default Post;
