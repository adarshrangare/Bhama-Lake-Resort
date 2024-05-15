import React from "react";
import motion from "framer-motion"
import Title from "./Title";
// import '../../../assets/heroVideo.mp4'
const Hero = () => {
  return (
    <>
      <main className="fixed top-0 min-h-screen  overflow-hidden mainHero mx-auto  w-full -z-10 ">
        <video
          className="w-full h-full min-h-screen max-w-screen object-cover mx-auto"
          width="1920"
          height="1080"
          autoPlay
          muted
          loop
        >
          <source src="heroVideo.mp4" type="video/mp4" />
        </video>
        {/* <div className=" "></div> */}
      </main>
     <Title/>
    </>
  );
};

export default Hero;
