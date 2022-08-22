import Link from "next/link";
import type { FC } from "react";

import styles from "$styles/NavBar.module.scss";
const NavBar: FC = () => {
  return (
    <nav className={styles.NavBar}>
      <Link href="/">Home</Link> | <Link href="/about">About</Link>
    </nav>
  );
};

export default NavBar;
