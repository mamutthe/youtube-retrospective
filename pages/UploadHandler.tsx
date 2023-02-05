import React, { useState, createContext, useEffect } from 'react';
import { TutorialQuestion } from '../components/UploadHandler/TutorialQuestion';
import { UploadHandlerCard } from '../components/UploadHandler/UploadHandlerCard';
import { FileUploader } from '../components/UploadHandler/FileUploader';
import { WarningCard } from '../components/UploadHandler/WarningCard';
import { HandleRetrospetive } from '../components/UploadHandler/HandleRetrospective';
import localforage from 'localforage';
import { AnimatePresence, motion } from 'framer-motion';

export const UploadHandlerContext = createContext({
  setCurrentComponent: (component: string) => {},
  showWarning: (message: string) => {},
});

export const UploadHandler = () => {
  const [warning, setWarning] = useState({
    isWarning: false,
    message: '',
  });
  const [currentComponent, setCurrentComponent] = useState('');
  const [isCheckingDone, setIsCheckingDone] = useState(false);

  const showWarning = (message: string) => {
    setWarning({
      isWarning: true,
      message: message,
    });
  };
  const checkIfUploaded = () => {
    localforage.getItem('strings').then((value) => {
      if (value) {
        setCurrentComponent('HandleRetrospective');
      } else {
        setCurrentComponent('TutorialQuestion');
      }
      setIsCheckingDone(true);
    });
  };

  useEffect(() => {
    checkIfUploaded();
  }, []);

  return (
    <>
      <AnimatePresence>
        {isCheckingDone && (
          <div className="flex min-h-screen w-screen flex-col items-center justify-center space-y-2">
            <UploadHandlerCard>
              <motion.div
                key={currentComponent}
                initial={{ y: '100%' }}
                animate={{ y: 0 }}
                exit={{ y: '-100%' }}
                transition={{ duration: 0.3 }}
              >
                <UploadHandlerContext.Provider
                  value={{ setCurrentComponent, showWarning }}
                >
                  {currentComponent === 'TutorialQuestion' && (
                    <TutorialQuestion />
                  )}
                  {currentComponent === 'FileUploader' && <FileUploader />}
                  {currentComponent === 'HandleRetrospective' && (
                    <HandleRetrospetive />
                  )}
                </UploadHandlerContext.Provider>
              </motion.div>
            </UploadHandlerCard>
            {warning.isWarning && currentComponent === 'FileUploader' && (
              <WarningCard message={warning.message} />
            )}
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default UploadHandler;
