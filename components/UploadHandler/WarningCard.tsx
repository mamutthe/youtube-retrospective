import React from 'react';
import { ExclamationTriangleIcon } from '@heroicons/react/24/solid';
type WarningCardProps = {
  message: string;
};

export const WarningCard: React.FC<WarningCardProps> = ({ message }) => {
  return (
    <>
      <div className="flex space-x-2 p-4 items-center justify-center h-[12vh] w-[80vw] rounded-2xl border border-white/10 bg-zinc-800">
        <ExclamationTriangleIcon className="h-10 w-10 text-yellow-400" />
        <p className="text-slate-200">{message}</p>
      </div>
    </>
  );
};

export {};
