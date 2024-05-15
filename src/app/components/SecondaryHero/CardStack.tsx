"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
 
let interval: any;
 
type Card = {
  id: number;
  content: React.ReactNode;
};
 
export const CardStack = ({
  items,
  offset,
  scaleFactor,
}: {
  items: Card[];
  offset?: number;
  scaleFactor?: number;
}) => {
  const CARD_OFFSET = offset || 10;
  const SCALE_FACTOR = scaleFactor || 0.06;
  const [cards, setCards] = useState<Card[]>(items);
 
  useEffect(() => {
    startFlipping();
 
    return () => clearInterval(interval);
  }, []);
  const startFlipping = () => {
    interval = setInterval(() => {
      setCards((prevCards: Card[]) => {
        const newArray = [...prevCards]; // create a copy of the array
        newArray.unshift(newArray.pop()!); // move the last element to the front
        return newArray;
      });
    }, 5000);
  };
 
  return (
    <div className="image-part h-fit">
        <div className="relative  w-11/12 min-h-fit  md:w-1/2 mt-6 mx-4">
          {cards.map((card, index) => {
            return (
              <motion.div
                key={card.id}
                className="absolute  bg-white h-fit w-full  md:w-96 rounded-3xl p-4 shadow-xl border border-neutral-200   shadow-black/[0.1]  flex flex-col justify-between"
                style={{
                  transformOrigin: "top center",
                }}
                animate={{
                  top: index * -CARD_OFFSET,
                  scale: 1 - index * SCALE_FACTOR, // decrease scale for cards that are behind
                  zIndex: cards.length - index, //  decrease z-index for the cards that are behind
                }}
              >
                <div className="font-normal text-neutral-700 ">
                  {card.content}
                </div>
        
              </motion.div>
            );
          })}
        </div>
    </div>
  );
};