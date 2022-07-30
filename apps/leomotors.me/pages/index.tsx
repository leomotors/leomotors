import type { Endpoints } from "@octokit/types";
import type { GetStaticProps, NextPage } from "next";
import {
  Award,
  Briefcase,
  CodeSquare,
  Github,
  JournalRichtext,
  Linkedin,
  Twitter,
} from "react-bootstrap-icons";

import CgWebring from "$components/CgWebring";
import Link from "$components/Link";
import styles from "$styles/Home.module.scss";

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const res = (await fetch("https://api.github.com/users/Leomotors").then((r) =>
    r.json()
  )) as Endpoints["GET /user"]["response"]["data"];

  return {
    props: { bio: res.bio },
    revalidate: 600,
  };
};

interface HomeProps {
  bio: string | null;
}

const Home: NextPage<HomeProps> = ({ bio }) => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4 bg-slate-900 py-6 px-1 text-center text-white">
      <h1 className="text-4xl font-bold">Hello! I'm Leo ✨</h1>
      <h2 className="text-3xl font-bold">Nutthapat Pongtanyavichai</h2>

      <p className="mx-auto w-full p-2 text-xl font-semibold md:w-2/3">
        {bio ?? "(Error fetching from GitHub API)"}
      </p>

      <section className={styles.section}>
        <Link name="Portfolio" to="https://portfolio.leomotors.me">
          <Award size="32" />
        </Link>

        <Link name="Resume" to="https://resume.leomotors.me">
          <Briefcase size="32" />
        </Link>

        <Link name="Blog" to="https://blog.leomotors.me">
          <JournalRichtext size="32" />
        </Link>

        <Link name="Repo List" to="https://repos.leomotors.me">
          <CodeSquare size="32" />
        </Link>
      </section>

      <section className={styles.section}>
        <Link name="GitHub" to="https://github.com/Leomotors">
          <Github size="32" />
        </Link>

        <Link name="Twitter" to="https://twitter.com/LeomotorsTH">
          <Twitter size="32" />
        </Link>

        <Link name="LinkedIn" to="https://www.linkedin.com/in/leo-nutthapat">
          <Linkedin size="32" />
        </Link>
      </section>

      <section className={styles.section}>
        <Link
          name="Creators Garten"
          to="https://creatorsgarten.org/ring"
          size="sm"
        >
          <CgWebring />
        </Link>
      </section>

      <footer>
        <div className="flex flex-col items-center gap-2 sm:flex-row">
          <p>Source Code of this website is available on</p>
          <a
            href="https://github.com/Leomotors/Leomotors"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1 text-slate-300 transition-colors hover:text-slate-400"
          >
            <Github size="20" />
            <p>GitHub</p>
          </a>
        </div>
      </footer>
    </main>
  );
};

export default Home;
