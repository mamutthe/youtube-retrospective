/* eslint-disable @next/next/no-img-element */
import React from "react";
import Image from "next/image";
import purple from "../public/purple.png";
import orange from "../public/orange.png";
import blue from "../public/blue.png";
import { motion } from "framer-motion";

type HomeCardProps = {
  activeGradient: string;
} & React.HTMLAttributes<HTMLDivElement>;

export const HomeCards: React.FC<HomeCardProps> = ({ activeGradient }) => {
  return (
    <div className="flex justify-center h-[24rem] w-[60rem] flex-row space-x-8 p-4"
    >
      <div
        className={`pseudo-glow before:${
          activeGradient === "orange-gradient" ? "orange-gradient" : ""
        } h-[24.5rem]`}
      >
        <Image
          src={orange}
          alt="Videos mais assistidos por mês"
          className="relative rounded-2xl"
          height={400}
        />
      </div>

      <div
        className={`pseudo-glow before:${
          activeGradient === "purple-gradient" ? "purple-gradient" : ""
        } h-[24.5rem]`}
      >
        <Image
          src={purple}
          alt="Canal favorito do ano"
          className="relative rounded-2xl"
          height={400}
        />
      </div>

      <div
        className={`pseudo-glow before:${
          activeGradient === "blue-gradient" ? "blue-gradient" : ""
        } h-[24.5rem]`}
      >
        <Image
          src={blue}
          alt="Videos mais assistidos do ano"
          className="relative rounded-2xl"
          height={400}
        />
      </div>
    </div>
  );
};

export {};
