import { AnimatedTitle, Paragraph, GradientButton } from "../components";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  const handleRedirect = () => {
    router.push("/HistoryAnalyzer");
  };

  return (
    <section className="flex flex-col items-center p-2 space-y-10">
      <AnimatedTitle />
      <Paragraph />
      <GradientButton onClick={handleRedirect} />
    </section>
  );
}
