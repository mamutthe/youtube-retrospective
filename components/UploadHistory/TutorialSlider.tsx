import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "flowbite-react";
import { ArrowButton } from "../ArrowButton";

const tutorialSteps = [
  {
    label: "Passo 1",
    description: "Descriçdsdsdsdsdsdsdsdsão do passo 1",
    imgPath: "/tuto_1.png",
  },
  {
    label: "Passo 2dsdsdsdsdsd",
    description: "Descrição do passo 2",
    imgPath: "/tuto_2.png",
  },
];

const TutorialSlider = () => {
  const [stepIndex, setStepIndex] = useState(0);

  const handleStepChange = (isNext: boolean) => {
    const nextIndex = isNext ? stepIndex + 1 : stepIndex - 1;
    if (nextIndex >= 0 && nextIndex < tutorialSteps.length) {
      setStepIndex(nextIndex);
    }
  };

  const nextStep = () => handleStepChange(true);
  const prevStep = () => handleStepChange(false);
  
  return (
    <div className="flex flex-col items-center space-y-4">
        <div 
        className="h-[100px] w-[700px] rounded-2xl border border-white/10 bg-white/10 p-2">
          <span className="text-xl font-medium text-slate-200">
            {tutorialSteps[stepIndex].label}
          </span>
          <br />
          <span className="text-md font-medium text-slate-200">
            {tutorialSteps[stepIndex].description}
          </span>
        </div>

      <section className="flex flex-row items-center space-x-4">
        <ArrowButton arrow="left" onClick={prevStep} />
        <div className="flex w-[700px] select-none overflow-hidden rounded-2xl ">
          <motion.div
            className="flex"
            animate={{ x: stepIndex === 0 ? 0 : -700 }}
            transition={{ duration: 0.5 }}
          >
            {tutorialSteps.map((step) => (
              <Image
                key={step.label}
                alt={step.label}
                src={step.imgPath}
                width={700}
                height={600}
                className="pointer-events-none object-cover"
              />
            ))}
          </motion.div>
        </div>
        <ArrowButton arrow="right" onClick={nextStep} />
      </section>
    </div>
  );
};

export default TutorialSlider;
