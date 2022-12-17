import React from 'react';
import { Button, Spinner } from 'flowbite-react';
import { useState } from 'react';
import { doHistory, history } from '../history-analyzer/doHistory';

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
      doHistory(reader.result);
    };
  };

  return (
    <main className="p-4">
      <section className="flex flex-col items-center justify-center space-y-6">
        <header className="text-center">
          <h1 className="font-extrabold text-3xl text-slate-900">
            UPLOAD YOUR
            <span className="blue-gradient bg-clip-text text-transparent ">
              {' '}
              YOUTUBE HISTORY{' '}
            </span>
            FILE
          </h1>
          <p className="font-medium">and costumize which stats you want</p>
        </header>

        <div className="flex flex-row justify-center items-center space-x-4">
          <input
            type="file"
            id="ytHistory"
            accept=".json"
            onChange={uploadFile}
            className="hidden"
          />
          <Button id="uploadButton" style={{ marginLeft: 0 }}>
            <label
              htmlFor="ytHistory"
              style={{ marginLeft: 0, cursor: 'pointer' }}
            >
              {uploadButtonStyle.status}
            </label>
          </Button>
          <Button color="success">Costomize</Button>
        </div>
      </section>
    </main>
  );
}
