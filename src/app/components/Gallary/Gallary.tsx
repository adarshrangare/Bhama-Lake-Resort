import React from 'react'
import { WobbleCard } from './WobbleCard'
import { SlideShow } from './SlideShow'
import { Card } from '../Facilities/Cards'
import { Carousel } from 'antd';
const Gallary = () => {

  const images = [
    "https://plus.unsplash.com/premium_photo-1680020185270-e5c6a434e182?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1690372792452-6e7ee16bdeb9?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1542644499-f82093e97d34?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1663131603284-6563a8aeffb8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1686167989783-3eca82199fbc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1663126637580-ff22a73f9bfc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1663061414669-bb34bcd3ff2f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1663061414669-bb34bcd3ff2f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

  ]

  return (
    <div className='bg-white relative'>
        
      <SlideShow className='md:h-[120vh] h-screen' images={images}>

        <div></div>

      </SlideShow>

      <div className='absolute  top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 z-20 w-full '>
        <h1 className='text-center font-bold text-3xl md:text-6xl -translate-y-8 text-white'>Resort Gallary</h1>

        <div className=' w-full lg:hidden'>
          <Carousel autoplay className='inline-block overflow-hidden '>
          {images.map((item,index)=>(
            <WobbleCard image={item} className='w-full h-full shrink-0  ' >
              <img src={item} alt="" className='w-full h-full  ' />
            </WobbleCard>
          
          ))}
          </Carousel>
          <br />
          <Carousel autoplay className='inline-block overflow-hidden '>
          {images.reverse().map((item,index)=>(
            <WobbleCard image={item} className='w-full h-full shrink-0  ' >
              <img src={item} alt="" className='w-full h-full  ' />
            </WobbleCard>
          
          ))}
          </Carousel>
          
        </div>


        <div className=' 
          grid lg:grid-cols-4 grid-rows-2 gap-x-4 gap-y-4 w-10/12 md:p-8 mx-auto
           max-lg:hidden
        '>
        
          {images.map((item,index)=>(
            <WobbleCard image={item} className='w-full h-full shrink-0 max-md:w-48 min-h-48' >
              <img src={item} alt="" className='w-full h-full scale-125 ' />
            </WobbleCard>
          
          ))}
        </div>
      </div>
        
    </div>
  )
}

export default Gallary