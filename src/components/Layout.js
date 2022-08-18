import Link from "next/link";

const Layout = ({ children }) => (
  <div className="layout">
    <div className="header">
      <h1>Starter Kit</h1>
    </div>

    <div className="menu">
      <ul>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/posts">
            <a>Posts</a>
          </Link>
        </li>
      </ul>
    </div>

    <hr />

    <div className="page">{children}</div>
  </div>
);

export default Layout;
