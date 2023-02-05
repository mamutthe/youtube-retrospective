import React from 'react';
import { Spinner } from 'flowbite-react';

export const LoadingFile = () => {
  return (
    <div className="flex items-center justify-center">
      <Spinner className='h-10 w-10' />
    </div>
  );
};
