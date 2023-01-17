import "../styles/globals.css";
import type { AppProps } from "next/app";
import localFont from "@next/font/local";

const mulish = localFont({
  src: "./Mulish-VariableFont_wght.ttf",
});

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <main className={`${mulish.className} w-screen`}>
      <Component {...pageProps} />
    </main>
  );
}
