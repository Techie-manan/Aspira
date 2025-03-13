import { useState } from 'react'
import Navbar from './components/Navbar.jsx'
import './App.css'
// import 'animate.css';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <div className='my-10 p-3 px-5 w-[90vw] h-[25vh] bg-[#FFFFFF33] rounded-xl shadow-2xl bg-cover' style={{ backgroundImage: 'url("src/assets/Rectangle 11.jpg")' }}>
        <div className='text-xl font-bold'>
          <h3>Welcome to the,</h3>
        </div>
        <div className='m-2 text-4xl font-bold'>
          Platform made by the Students for the Students...
        </div>
      </div>
      <div className="flex p-3 px-5 w-[90vw] h-[35vh] justify-around hover:scale-105 transition duration-500 ease-in-out"> 
        <div className='w-1/2 m-7'>
          <h1 className='text-3xl '>Find the Right University & Documents in Minutes!</h1>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis, enim commodi! Facere mollitia explicabo ex impedit quis perspiciatis voluptatem animi, et eaque porro tempora possimus quod recusandae, harum qui? Nostrum?
          </p>
          <button className=' border-amber-50 rounded-full m-2 px-5 p-3 shadow-2xl hover:scale-105 '>Find Your College Here</button>
        </div>
        <div className=' h-[35vh]'>
          <img className='rounded-xl object-cover  h-[35vh]' src="https://lh3.googleusercontent.com/p/AF1QipPHgbckWlVwLvr2f3yUs3ckY1YINN_m2VMEDdH_=s680-w680-h510" />
        </div>
      </div>

    </>
  )
}

export default App
