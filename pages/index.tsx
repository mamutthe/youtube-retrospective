import React, { useEffect, useState } from "react";
import { GradientButton } from "../components";
import { useRouter } from "next/router";
import Head from "next/head";
import { HomeCards } from "../components/HomeCards";
import { HomeInfoCard } from "../components/HomeInfoCard";
import { motion } from "framer-motion";

export default function Home() {
  const router = useRouter();
  const handleRedirect = () => {
    router.push("/HistoryAnalyzer");
  };

  const [currentGradient, setCurrentGradient] = useState("purple-gradient");
  const [currentGradientIndex, setCurrentGradientIndex] = useState(2);

  useEffect(() => {
    const gradientColors = [
      "orange-gradient",
      "purple-gradient",
      "blue-gradient",
    ];

    const changeGradient = () => {
      setCurrentGradient(gradientColors[currentGradientIndex]);
      console.log(currentGradientIndex, currentGradient);
      if (currentGradientIndex === gradientColors.length - 1) {
        setCurrentGradientIndex(0);
      } else {
        setCurrentGradientIndex(currentGradientIndex + 1);
      }
    };

    const interval = setInterval(() => {
      changeGradient();
    }, 2000);
    return () => clearInterval(interval);
  }, [currentGradient, currentGradientIndex]);

  return (
    <div className="flex select-none flex-col items-center bg-zinc-900">
      <Head>
        <title>YouTube Stats</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex flex-col items-center justify-center">
        <header className="text-center min-h-screen">
          <h1
            className={`${currentGradient} bg-clip-text p-4 text-center font-roboto text-8xl font-black text-transparent`}
          >
            YouTube Stats
          </h1>
          <span className="text-[1.7rem] font-medium text-slate-200">
            Retrospectiva dos seus videos do YouTube
          </span>

          <section className="flex flex-col space-y-20 items-center justify-center">
            <HomeCards activeGradient={currentGradient} />

            <GradientButton className="relative" beforeClassName={`before:${currentGradient}`} onClick={handleRedirect}>
              Começar
            </GradientButton>
          </section>
        </header>

        <section className="flex h-screen w-full flex-col items-center justify-center border-t border-t-slate-200/10 bg-zinc-900 p-4">
          <h1 className="blue-gradient bg-clip-text text-7xl font-bold text-transparent">
            Como funciona?
          </h1>
          <div className="mt-8 grid grid-cols-2 grid-rows-2 gap-8">
            <HomeInfoCard
              infoNumber={"1"}
              className="relative"
              beforeClassName="before:bg-emerald-500 before:blur-[9.5px] before:hover:blur-[11.5px]"
            >
              <span className="text-4xl font-medium text-white/90">
                Baixe seu histórico do YouTube seguindo nosso{" "}
                <a href={"#"} className="font-bold text-teal-800">
                  tutorial.
                </a>
              </span>
            </HomeInfoCard>

            <HomeInfoCard
              infoNumber={"2"}
              beforeClassName="col-start-1 before:bg-emerald-500 before:blur-[9.5px] before:hover:blur-[11.5px]"
              className="relative"
            >
              <span className="text-4xl font-medium text-white/90">
                Faça upload do seu histórico e gere sua{" "}
                <a className="font-bold text-teal-800">retrospectiva.</a>
              </span>
            </HomeInfoCard>

            <HomeInfoCard
              beforeClassName="col-start-2 row-span-2 row-start-1 before:bg-white/60 before:blur-[6.5px] before:hover:blur-[8.5px]"
              className="relative space-y-8 text-center"
              textDivClassName="flex flex-col space-y-6"
              transparent
            >
              <span className="self-start text-4xl font-bold text-white">
                Como a retrospectiva é gerada?
              </span>
              <br />
              <span className="self-start text-2xl font-medium text-white">
                Um código escrito em{" "}
                <span className="blue-gradient bg-clip-text text-2xl font-bold text-transparent">
                  TypeScript
                </span>{" "}
                analisa o histórico enviado e gera as estatísticas de acordo com
                ano selecionado, os storys que mostram essas informações são
                então gerados pelo{" "}
                <span className="blue-gradient bg-clip-text text-2xl font-bold text-transparent">
                  ReactJS.
                </span>
              </span>
            </HomeInfoCard>
          </div>
        </section>
      </main>
    </div>
  );
}
