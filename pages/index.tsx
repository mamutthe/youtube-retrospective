import React, { useEffect, useState } from "react";
import {
  GradientButton,
  MostWatchedChannelCard,
  TopChannelsCard,
  TopVideosCard,
} from "../components";
import { useRouter } from "next/router";
import Head from "next/head";
import { HomeInfoCard } from "../components/HomeInfoCard";
import { HomeTitle } from "../components/Home/HomeTitle";
import { StorySlider } from "../components/StorySlider";
import { GenericButton } from "../components";
import { motion } from "framer-motion";
import Link from "next/link";

const HowItWorksCards = () => {
  const router = useRouter();
  const handleRedirect = () => {
    router.push("/HistoryAnalyzer");
  };

  return (
    <div className="py-3 flex h-full w-full flex-col space-y-2">
      <div className="px-2 blue-gradient flex h-1/3 flex-col items-center justify-center rounded-xl border border-white/10 text-center text-[1.6rem] font-semibold text-slate-200">
        <span className="inline">
          Apenas baixe seu histórico do YouTube seguindo nosso{" "}
          <Link
            href={"/HistoryAnalyzer"}
            className="inline bg-clip-text text-transparent text-teal-800"
          >
            tutorial
          </Link>
          {""}, faça upload e gere sua retrospectiva ✨
        </span>
      </div>

      <div className="flex h-[67%] flex-col items-center justify-center space-y-2 rounded-xl border border-zinc-600/80 text-center text-3xl font-medium text-slate-200">
        <span className="inline text-2xl">
          Um código{" "}
          <span className="blue-gradient bg-clip-text font-bold text-transparent">
            JavaScript
          </span>{" "}
          rodando em seu navegador, analisa seu histórico e gera uma
          restrospectiva baseada nele, isso significa que nenhuma dado pessoal é
          enviado aos nossos servidores.
        </span>
        <br />
        <GenericButton onClick={handleRedirect} className="bg-zinc-700/40">
          Gerar minha restrospectiva
        </GenericButton>
      </div>
    </div>
  );
};

const HeaderButtons = () => {
  const router = useRouter();
  const handleRedirect = () => {
    router.push("/HistoryAnalyzer");
  };

  return (
    <div className="">
      <GradientButton
        className="h-12 w-44 text-base md:h-16 md:w-80 md:text-xl"
        beforeClassName={`before:blue-gradient w-44 h-16 md:w-80`}
        onClick={handleRedirect}
      >
        Começar agora
      </GradientButton>
      <br />
      <GenericButton
        className="h-12 w-44 text-base md:h-16 md:w-80 md:text-xl"
        onClick={() =>
          window.scrollTo({
            top: document.body.scrollHeight,
            behavior: "smooth",
          })
        }
      >
        Saiba como funciona
      </GenericButton>
    </div>
  );
};

export default function Home() {
  const storyCards = [
    <TopChannelsCard key="first" />,
    <MostWatchedChannelCard key="second" />,
    <TopVideosCard key="third" />,
  ];

  return (
    <div className="flex w-screen flex-col items-center justify-center ">
      <Head>
        <title>YouTube Stats</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="flex h-[200vh] flex-col justify-center md:flex-row md:space-x-4">
        <div className="flex h-full flex-col items-center justify-center space-y-10">
          <HomeTitle />
          <HeaderButtons />
        </div>
        <div className="flex h-full w-full justify-center px-2 md:mt-4 md:w-[31rem]">
          <div className="md:mt-0">
            <StorySlider starterCard={1} storyCards={storyCards} />
          </div>
        </div>
      </header>

      <section className="flex h-screen w-full flex-col items-center justify-center space-y-1 border-t border-t-slate-200/10 px-4 py-2">
        <h1 className="blue-gradient bg-clip-text text-4xl font-semibold text-transparent">
          Como funciona?
        </h1>
        <HowItWorksCards />
      </section>
    </div>
  );
}
