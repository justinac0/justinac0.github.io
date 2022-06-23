import styles from "./topbar.module.css";
import Link from "next/link";
import { useState } from "react";

export const TopBar = () => {
  const [toggled, setToggled] = useState(false);

  return (
    <div
      className={styles.topbar + " " + styles.stick + "container-fluid shadow"}
    >
      <div className={"row" + " " + styles.centerlogo}>
        <div className="col">
          <button
            onClick={() => setToggled(!toggled)}
            className={styles.hamburger}
          >
            <i className={"bi bi-list"}></i>
          </button>
        </div>
        <div
          className="col"
          style={{
            textAlign: "right",
          }}
        >
          <h4 className="m-0">Justin Chappell</h4>
        </div>
      </div>

      {toggled ? (
        <>
          <hr />
          <div className={"btn-group" + " " + styles.menu}>
            <Link href="/">
              <i
                className={
                  "bi bi-house-fill btn btn-light" + " " + styles.menubutton
                }
              ></i>
            </Link>
            <Link href="/about">
              <p className={"btn btn-danger" + " " + styles.menubutton}>
                About
              </p>
            </Link>

            <Link href="/portfolio">
              <p className={"btn btn-success" + " " + styles.menubutton}>
                Portfolio
              </p>
            </Link>

            <Link href="/blogs">
              <p className={"btn btn-primary" + " " + styles.menubutton}>
                Blogs
              </p>
            </Link>
          </div>
        </>
      ) : (
        <></>
      )}
    </div>
  );
};
