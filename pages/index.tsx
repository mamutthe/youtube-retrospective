import { AnimatedTitle, Paragraph, GradientButton } from '../components';

export default function Home() {
  return (
    <section className="p-2 flex items-center flex-col space-y-10">
      <AnimatedTitle />
      <Paragraph />
      <GradientButton />
    </section>
  );
}
