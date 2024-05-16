import React from 'react'

const IntroVideo = () => {
  return (
    <iframe className='w-full mx-auto h-72 sm:h-96 md:h-screen bg-white pb-8'
  width={1000}
  height={1000}
  src="https://www.youtube.com/embed/gt2omTnlJs0?si=RaRiLPWZ2wdMoUqy&autoplay=1&mute=1"
  title="YouTube video player"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  referrerPolicy="strict-origin-when-cross-origin"
  allowFullScreen
/>

  )
}

export default IntroVideo