import { HomeIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { useRouter } from 'next/router';

export const Navbar = () => {
  return (
    <div className="hidden md:block w-screen h-0">
      <nav className="relative ml-4 mt-2 flex h-14 w-1/12 flex-row items-center justify-center space-x-2 rounded-xl border border-white/10 bg-zinc-900/80">
        <Link href="/">
          <div 
          title='Home'
          className="nav-circle">
            <HomeIcon className="relative h-6 w-6 text-zinc-500" />
          </div>
        </Link>

        <Link href="/Tutorial">
          <div 
          title='Tutorial'
          className="nav-circle text-xl text-zinc-500">?</div>
        </Link>
      </nav>
    </div>
  );
};

export {};
