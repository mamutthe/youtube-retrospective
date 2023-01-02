/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState, useRef, RefObject } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import placeholder from "../public/placeholder.png";

type Props = {} & React.HTMLAttributes<HTMLDivElement>;

const storyCards = [
  placeholder,
  placeholder,
  placeholder,
  placeholder,
  placeholder,
];

export const StorySlider = (props: Props) => {
  const sliderRef = useRef<any>();
  const [sliderWidth, setSliderWidth] = useState(0);

  useEffect(() => {
    console.log(
      sliderRef.current?.scrollWidth - sliderRef.current?.offsetWidth
    );
    setSliderWidth(
      sliderRef.current?.scrollWidth - sliderRef.current?.offsetWidth
    );
  }, []);

  return (
    <motion.div
      className="flex flex-row"
      ref={sliderRef}
      whileTap={{ cursor: "grabbing" }}
      drag="x"
      dragConstraints={{ right: 0, left: -sliderWidth }}
    >
      {storyCards.map((image) => (
        <motion.div
          className="px-4 min-h-[200px] min-w-[275px]"
          key={image.toString()}
        >
          <Image
            className="w-full h-full pointer-events-none rounded-2xl"
            draggable={false}
            src={image}
            alt="Exemplo de um story"
          />
        </motion.div>
      ))}
    </motion.div>
  );
};

export {};
