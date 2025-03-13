import React from 'react'

const navbar = () => {
  return (
    <>
    <div className='flex justify-between  border-amber-50 rounded-full px-10 py-5 bg-[#FFFFFF33] shadow-2xl '>
    <div>
        Logo
    </div>
    <ul className='flex list-none gap-[5vw]'>
        <li>Home</li>
        <li>Blogs</li>
        <li>About</li>
        <li>Contact Us</li>
        <li>Login</li>
    </ul>
    </div>
    </>
  )
}

export default navbar
