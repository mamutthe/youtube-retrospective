import React from 'react';
import { Button, Spinner } from 'flowbite-react';
import { useState, useRef } from 'react';
import { saveHistory } from '../history-analyzer/doHistory';

export default function HistoryUpload() {
  const [uploadButtonStyle, setUploadButtonStyle] = useState({
    status: 'Browse file...',
  });

  const uploadFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return alert('No file has been uploaded');
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsText(file);
    reader.readyState && setUploadButtonStyle({ status: 'Loading' });
    reader.onload = () => {
      setUploadButtonStyle({
        status: e.target.value.split('\\').pop() as string,
      });
      saveHistory(reader.result as string);
    };
  };

  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleUploadButtonClick = () => {
    if (fileInputRef.current === null) return;
    fileInputRef.current.click();
  };

  return (
    <main className="p-4">
      <section className="flex flex-col items-center justify-center space-y-6">
        <header className="text-center">
          <h1 className="font-extrabold text-3xl lg:text-6xl text-slate-900">
            UPLOAD YOUR
            <span className="colorful-gradient bg-clip-text text-transparent ">
              {' '}
              YOUTUBE HISTORY{' '}
            </span>
            FILE
          </h1>
          <p className="font-bold lg:text-3xl">
            and select which stats you want
          </p>
        </header>

        <div className="flex flex-row justify-center items-center space-x-4">
          <input
            type="file"
            id="ytHistory"
            accept=".json"
            onChange={uploadFile}
            className="hidden"
            ref={fileInputRef}
          />
          <button
            id="uploadButton"
            className="colorful-gradient text-white lg:text-2xl rounded-xl lg:py-2 px-2 shadow-md shadow"
            style={{ marginLeft: 0 }}
            onClick={handleUploadButtonClick}
          >
            {uploadButtonStyle.status}
          </button>
          <Button color="success">Customize</Button>
        </div>
      </section>
    </main>
  );
}
