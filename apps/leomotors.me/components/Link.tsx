import clsx from "clsx";
import type { FC, PropsWithChildren } from "react";

interface LinkProps extends PropsWithChildren {
  name: string;
  to: `http${"s" | ""}://${string}`;
  size?: "sm" | "lg";
}

const Link: FC<LinkProps> = ({
  name,
  to,
  size = "lg",
  children,
}: LinkProps) => {
  return (
    <a
      href={to}
      target="_blank"
      rel="noreferrer"
      className="flex cursor-pointer select-none flex-row items-center gap-2 rounded-lg border-2 border-slate-400 bg-slate-800 p-3 transition-all hover:bg-slate-700"
    >
      {children}

      {name && (
        <p className={clsx("font-bold", size == "lg" ? "text-2xl" : "text-xl")}>
          {name}
        </p>
      )}
    </a>
  );
};

export default Link;
