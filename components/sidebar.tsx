import Link from "next/link";

export const SideBar = () => {
  return (
    <div className="col-md-5 p-5 shadow sidebar">
      <span className="stick-title">
        <h1 className="title">Justin Chappell</h1>
        <p className="d-none d-md-flex">
          Currently studying Computer Science and Physics at QUT.
        </p>
        <div
          className="btn-group"
          role="group"
          aria-label="Basic mixed styles example"
        >
          <Link href="/">
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
