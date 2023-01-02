import { GradientButton } from "../components";
import { useRouter } from "next/router";
import Head from "next/head";
import { StorySlider } from "../components/StorySlider";

export default function Home() {
  const router = useRouter();
  const handleRedirect = () => {
    router.push("/HistoryAnalyzer");
  };

  return (
    <div className="flex flex-col min-h-screen select-none item-center bg-zinc-900">
      <Head>
        <title>YouTube Stats</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center p-2">
        <header className="flex flex-col items-center -space-y-3">
          <h1 className="p-4 font-black text-transparent -drop-shadow-lg text-8xl animate-purple-gradient bg-clip-text saturate-150 ">
            YouTube Stats
          </h1>
          <span className="text-[1.6rem] text-slate-200">
            Retrospectiva dos seus videos do YouTube
          </span>
        </header>

        <section className="flex flex-col items-center max-w-3xl mt-12 overflow-hidden">
          <StorySlider />
        </section>

        <section className="flex flex-row space-x-10 mt-14">
          <div className="relative before:block before:absolute before:blur-lg before:hover:blur-xl before:transition-all before:duration-50 before:ease-in-out before:inset-1 before:blue-gradient">
            <GradientButton className="relative" onClick={handleRedirect}>
              Começar
            </GradientButton>
          </div>
          <div className="relative before:block before:absolute before:blur-lg before:hover:blur-xl before:transition-all before:duration-50 before:ease-in-out before:inset-1 before:blue-gradient">
            <GradientButton className="relative text-white bg-zinc-900">
              Como funciona?
            </GradientButton>
          </div>
        </section>
      </main>
    </div>
  );
}

{
  /* <section className="flex flex-col items-center min-h-screen p-2 space-y-10 bg-slate-50">
      <Paragraph />
      <GradientButton onClick={handleRedirect}>Get Started</GradientButton>
    </section> */
}
