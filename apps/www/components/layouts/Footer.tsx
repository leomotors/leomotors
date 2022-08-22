import type { FC } from "react";
import { Github } from "react-bootstrap-icons";

const Footer: FC = () => {
  return (
    <footer className="mt-8 self-center">
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
  );
};

export default Footer;
