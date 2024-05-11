import React from 'react'

const Header = () => {
  return (
    <header className='z-20 backdrop-blur-sm bg-white bg-opacity-5 text-white sticky top-0 px-8 h-16 shadow-md bg-transparent flex justify-between items-center mx-auto'>
          <button className="logo font-bold text-2xl ">LOGO</button>
          <button className="logo bg-[#45afef] text-black font-semibold px-4 py-2 rounded-lg  ">CONTACT US</button>
    </header>
  )
}

export default Header