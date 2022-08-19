import type { NextPage } from "next";
import Router from "next/router";
import { useEffect } from "react";

const RickRollPage: NextPage = () => {
  useEffect(() => {
    Router.replace("https://www.youtube.com/watch?v=dQw4w9WgXcQ");
  }, []);

  return null;
};

export default RickRollPage;
