
import React from 'react'
import Header from './components/Header'
import Image from 'next/image'

const Home = () => {
  return (
    <div>
      <Header />
      
      <div className="flex h-[80%]">
        <div className="w-1/2 flex flex-col justify-center items-start m-12">
        <h1 className="max-w-[496px] text-[44px] font-bold ">IMPECCABLE CRAFTSMANSHIP AND FINESSE</h1>
        <p className=" text-[32px] m-4">An example of intricate workmanship and detail, elegant necklaces and long and short chains form a part of our desirable collection.</p>
        <button className="bg-[#A29875] text-white text-[22px] p-4 m-4">Explore Now</button>
        </div>
        <div className="w-1/2 flex justify-center p-5">
       <Image src={"/images/figma.svg"} alt="img" width={400} height={400} />
        </div>
        
      </div>
    </div>
  )
}

export default Home
