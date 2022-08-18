import User from "../../modules/user";

const PageUserView = ({ user }) => (
  <>
    <User.View user={user} />
  </>
);

PageUserView.getInitialProps = async ({ query: { id } }) => {
  const user = await User.api.read(id);
  return { user };
};

export default PageUserView;
