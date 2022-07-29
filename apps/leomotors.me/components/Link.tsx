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
      className={clsx(
        "flex cursor-pointer select-none flex-row items-center gap-2 rounded-lg border-2 border-slate-400 bg-slate-800 transition-all hover:bg-slate-700",
        size == "lg" ? "p-3" : "p-2"
      )}
    >
      {children}

      {name && (
        <p className={size == "lg" ? "text-2xl font-bold" : "text-lg"}>
          {name}
        </p>
      )}
    </a>
  );
};

export default Link;
