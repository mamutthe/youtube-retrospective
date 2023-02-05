import '../styles/globals.css';
import type { AppProps } from 'next/app';
import localFont from '@next/font/local';
import { Navbar } from '../components/Navbar';
import { useRouter } from 'next/router';

const mulish = localFont({
  src: [{ path: './Mulish-VariableFont_wght.ttf' }],
});

export default function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const { pathname } = router;
  return (
    <main className={`${mulish.className} w-screen`}>
      {pathname !== '/' && <Navbar />}
      <Component {...pageProps} />
    </main>
  );
}
