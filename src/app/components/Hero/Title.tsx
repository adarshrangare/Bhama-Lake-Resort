"use client"
import { motion } from 'framer-motion'
import React from 'react'

const Title = () => {
  return (
    <div className="w-full  relative flex justify-center items-center bg-gradient-to-t from-black to-transparent h-screen">

        <motion.div
        initial="hidden"
        animate="visible"
        whileInView="visible"
        whileHover={{scale: 1.1}}
        exit={
            {
                opacity:0,
                transition: {
                    duration:0.4
                }
            }
        }
        variants={{
          hidden: {
            y: 100,
            opacity:0,
          },
          visible: {
            y:-10,
            opacity:1,
            transition: {
              delay: 0.4,
              duration:0.4
            },
          },
        }}
      >
        <h1 className="title font-extrabold text-white text-opacity-90 text-center text-6xl sm:text-4xl md:text-7xl  lg:text-9xl">
          BHAMA <br /> LAKE <br /> RESORT
        </h1>
      </motion.div>

    </div>
  )
}

export default Title