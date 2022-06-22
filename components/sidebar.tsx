import styles from "./sidebar.module.css";

import Link from "next/link";

export const SideBar = () => {
  return (
    <div className={"col-md-5 p-5 shadow" + " " + styles.sidebar}>
      <span className={"stick-title" + " " + styles.sidebartitle}>
        <h1 className="title">Justin Chappell</h1>
        <p className="d-none d-md-flex">
          Currently studying Computer Science and Physics at QUT.
        </p>
        <div className="btn-group">
          <Link href="/">
            <p className="btn-light btn">
              <i className="bi bi-house-fill"></i>
            </p>
          </Link>
          <Link href="/about">
            <p className="btn-danger btn">About</p>
          </Link>
          <Link href="/portfolio">
            <p className="btn-success btn">Portfolio</p>
          </Link>
          <Link href="/blogs">
            <p className="btn-primary btn">Blogs</p>
          </Link>
        </div>
      </span>
    </div>
  );
};
