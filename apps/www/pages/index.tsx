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

import CgWebring from "$components/elements/CgWebring";
import Link from "$components/elements/Link";
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

const HomePage: NextPage<HomeProps> = ({ bio }) => {
  return (
    <main className="flex flex-col items-center gap-4 text-center">
      <h1 className="text-4xl font-bold">Hello! I'm Leo ✨</h1>
      <h2 className="text-3xl font-bold">Nutthapat Pongtanyavichai</h2>

      <p className="mx-auto w-full p-2 text-xl font-semibold md:w-2/3">
        {bio ?? "(Error fetching from GitHub API)"}
      </p>

      <section className={styles.section}>
        <Link name="Portfolio" to="https://portfolio.leomotors.net">
          <Award size="32" />
        </Link>

        <Link name="Resume" to="https://resume.leomotors.net">
          <Briefcase size="32" />
        </Link>

        <Link name="Blog" to="https://blog.leomotors.net">
          <JournalRichtext size="32" />
        </Link>

        <Link name="Repo List" to="https://repos.leomotors.net">
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

      <h2 className="text-2xl font-bold">Webrings</h2>
      <section className={styles.sectionMini}>
        <Link
          name="Creatorsgarten"
          to="https://creatorsgarten.org/ring"
          size="sm"
        >
          <CgWebring />
        </Link>
      </section>
    </main>
  );
};

export default HomePage;
