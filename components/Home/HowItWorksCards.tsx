import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { GenericButton } from '../GenericButton';

export const HowItWorksCards = () => {
  const router = useRouter();
  const handleRedirect = (page: string) => {
    router.push(page);
  };

  return (
    <div className="flex h-screen flex-col items-center space-y-1 border-t border-t-slate-200/20 py-4 lg:space-y-8 gray-background lg:bg-zinc-800">
      <h1 className="blue-gradient bg-clip-text text-4xl font-bold text-transparent lg:text-7xl">
        Como funciona?
      </h1>

      <div className="flex w-full flex-col space-y-2 px-6 lg:px-16 lg:items-center lg:space-y-5">

        <div className="blue-gradient flex h-1/3 w-full flex-col items-center justify-center rounded-xl border border-white/10 p-2 lg:py-8 text-center text-[1.6rem] font-medium text-slate-200 lg:h-full lg:w-1/2 lg:text-3xl">
          <span className="inline">
            Apenas baixe seu histórico do YouTube seguindo nosso{' '}
            <Link
              href={'/HistoryAnalyzer'}
              className="inline bg-clip-text text-transparent text-teal-800"
            >
              tutorial
            </Link>
            {''}, faça upload e gere sua retrospectiva ✨
          </span>
        </div>

        <div className="flex h-[67%] w-full flex-col items-center justify-center rounded-xl border border-zinc-600/80 p-2 text-center font-medium text-slate-200 lg:h-full lg:w-1/2 lg:py-6">
          <span className="inline text-2xl lg:text-2xl">
            Um código{' '}
            <span className="blue-gradient bg-clip-text font-bold text-transparent">
              JavaScript
            </span>{' '}
            rodando em seu navegador, analisa seu histórico e gera uma
            restrospectiva baseada nele, isso significa que nenhuma dado pessoal
            é enviado aos nossos servidores.
          </span>
          <br />
          <GenericButton
            href='/UploadHandler'
            className="bg-zinc-700/40"
          >
            Gerar minha restrospectiva
          </GenericButton>
        </div>
      </div>
    </div>
  );
};

export {};
