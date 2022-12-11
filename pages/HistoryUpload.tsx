import React from 'react';
import { Button } from 'flowbite-react';
import { useRef } from 'react';

const uploadFile = (e: React.ChangeEvent<HTMLInputElement>) => {
  if (!e.target.files) return console.log('No file has been uploaded');
  const file = e.target.files[0];
  const reader = new FileReader();
  reader.readAsText(file);
  reader.onload = () => {
    const json = JSON.parse(reader.result as string);
    console.log(json);
  };
};

export default function HistoryUpload() {
  const labelRef = useRef(null);
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
          <label ref={htmlFor="ytHistory" style={{ display: 'none' }}></label>
          <Button style={{ marginLeft: 0 }}>Browse file...</Button>
          <Button color="success">Costumize</Button>
        </div>
      </section>
    </main>
  );
}
