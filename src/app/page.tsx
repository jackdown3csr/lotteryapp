"use client";

import Image from "next/image";
import { useActiveWallet } from "thirdweb/react";
import  Header from "./components/Header";
import Login from "./components/Login";
import { useState } from "react";
import { readContract } from "thirdweb";
import { useReadContract } from "thirdweb/react";


export default function Home() {
  const wallet = useActiveWallet();
  const [quantity, setQuantity] = useState<number>(1);


 


    if (!wallet) return ( <Login/>)

    return(
    <main>
      <div className="min-h-screen flex flex-col">

        <div className="flex-1">
        <Header />

<div className="space-y-5 md:space-y-0 m-5 md:flex md:flex-row items-start justify-center md:space-x-5">
    <div className="stats-container">
               <h1 className="text-4xl text-white text-center">The Next round</h1>
  
        <div className="flex justify-between p-2 space-x-2">
          <div className="stats">
              <h2 className="text-sm">total pool</h2>
               <p className="text-xl">10 GNET</p>
          </div>
           <div className="stats">
             <h2 className="text-sm">Ticket remain</h2>
            <p className="text-xl">100</p>
           </div>
       </div>


    </div>
    <div className="stats-container space-y-2">
      <div className="stats-container">
        <div className="flex justify-between items-center text-white">
          <h2>Price per ticket</h2>
          <p>1 GNET</p>
        </div>
        <div className="flex text-white items-center space-x-2 p-4 ">
          <p>TIckets</p>
          <input className="flex w-full bg-transparent text-right outline-none" type="number"
           min={1}
           max={10}
           value={quantity}
           onChange={(e) => setQuantity(Number(e.target.value))}/>
        </div>

        <div className="space-y-2 mt-5">
          <div className="flex items-center justify-between text-orange-500 text-s italic font-extrabold">
            <p>Total Cost of tickets</p>
            <p>0.9</p>
          
          </div>
          <div className="flex items-center justify-between text-orange-500 text-xs italic">
            <p>Service fees</p>
            <p>0.01Gnet</p>
          </div>
          <div className="flex items-center justify-between text-orange-500 text-xs italic">
            <p>+ Network fees</p>
            <p>TBC</p>
          </div>
        </div>
        <button className="mt-5 w-full px-10 py-5 rounded-md bg-gradient-to-br from-orange-600 to bg-orange-700
        text-white shadow-xl disabled:from-orange-200 disabled:text-gray-700 disabled:to-orange-50 disabled:cursor-not-allowed"> Buy tickets</button>
      </div>
    </div>
</div>

<div></div>

        
</div>
      </div>
    </main>
  );
}
