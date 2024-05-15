"use client";
import { motion, useInView } from "framer-motion";
import React, { createRef, useRef } from "react";
import { Card } from "./Cards";
import { title } from "process";
import { facilities } from "@/utils/constants";
const Facilities: React.FC = () => {
  // const facilities = [
  //   {
  //     title: "Camping",
  //     description: " Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  //     imageURL:
  //       "https://images.unsplash.com/photo-1537905569824-f89f14cceb68?q=80&w=1902&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //   },
  //   {
  //     title: "Boating",
  //     description: " Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  //     imageURL:
  //       "https://images.unsplash.com/photo-1621932945904-c5be9be992d8?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //   },
  //   {
  //     title: "Fishing",
  //     description: " Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  //     imageURL:
  //       "https://images.unsplash.com/photo-1596796571148-77b6e70dd6b6?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //   },
  // ];
  const ref = useRef<HTMLDivElement>(null);

  // const ref = createRef();

  const  inView  = useInView(ref);

  return (
    <section className="bg-white py-2 md:py-6 ">
      <h1 className="text-center text-4xl font-bold">Facilities</h1>

      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        exit={{
          opacity: 0,
          transition: {
            duration: 0.4,
          },
        }}
        variants={{
          hidden: {
            y: 100,
            opacity: 0,
          },
          visible: {
            y: 0,
            opacity: 1,
            transition: {
              delay: 0.4,
              duration: 0.4,
            },
          },
        }}
        className="mx-auto w-10/12   items-center bg-white max-md:flex-col py-2 md:py-8 m-8 flex gap-4 justify-around px-4 flex-wrap"
      >
        {facilities.map((facility, index) => (
          <Card key={index} imageUrl={facility?.image as string}>
            <h1 className="font-semibold text-xl">{facility?.title}</h1>
            <p>{facility?.description}</p>
          </Card>
        ))}
      </motion.div>
    </section>
  );
};

export default Facilities;