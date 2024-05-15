import React from "react";
import { CardStack } from "./CardStack";
import Image from "next/image";
import { building, garden_Area, gate } from "@/assets";
import { Carousel } from "antd";
const SecondaryHero = () => {
  return (
    <section className="mx-auto  px-10 bg-gradient-to-tl from-lime-300 to-green-600/90 w-full py-8">
      <div className="w-full px-10 flex py-5 max-md:flex-col">
        <div className="titles basis-1/2">
          <h1 className="text-5xl text-white py-2 font-bold w-11/12 text-center md:text-left md:w-8/12">
          Experience Nature&apos;s Best at <br /> <span className="animate-pulse text-red-600 ">Bhama Lake Resort</span>
          </h1>
          <p className="w-11/12 text-center md:text-left md:w-8/12 py-4 text-neutral-100 ">
          Escape the hustle and bustle of the city and host your next corporate offsite at our resort. Our state-of-the-art facilities, breathtaking natural surroundings, and luxurious amenities provide the perfect backdrop for a productive and unforgettable event. Our experienced team will work with you to plan and execute a tailored program that meets your specific needs and objectives. With top-notch dining options, team-building activities, and relaxation options, our resort ensures a seamless and successful offsite. Contact us today to plan your next corporate event.
          </p>
          <button className="my-8 max-md:mx-auto bg-white px-8 py-3 text-lime-500 rounded-lg font-semibold text-xl hover:scale-95 transition-all">
            Learn More
          </button>
        </div>
        <div className="w-full h-[70vh]  scale-110 mt-20 md:mr-20  basis-1/3">

          {/* <Carousel
          autoplay
          infinite
          className="w-1/2"
          > */}

          <Image width={400} height={400} className='w-full  rounded-lg' src={building} alt="building" />
          {/* <Image width={500} height={500} className='w-full  rounded-lg' src={gate} alt="building" /> */}
          {/* <Image width={500} height={500} className='w-full  rounded-lg' src={garden_Area} alt="garden" /> */}

          {/* </Carousel> */}

          {/* <CardStack
            offset={20}
            items={[
              {
                id: 1,
                content: (
                  <Image
                  className="rounded-md" 
                    alt="building"
                    src={building}
                    width={1000}
                    height={1000}
                  />
                ),
              },
              {
                id: 2,
                content: (
                  <Image 
                  className="rounded-md" alt="gate" src={gate} width={1000} height={1000} />
                ),
              },
              {
                id: 2,
                content: (
                  <Image
                  className="rounded-md" 
                    alt="garden"
                    src={garden_Area}
                    width={1000}
                    height={1000}
                  />
                ),
              },
            ]}
          /> */}
        </div>
      </div>
    </section>
  );
};

export default SecondaryHero;
