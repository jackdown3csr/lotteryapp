"use client";

import Image from "next/image";
import { useActiveWallet } from "thirdweb/react";
import  Header from "./components/Header";
import Login from "./components/Login";


export default function Home() {
  const wallet = useActiveWallet();


    if (!wallet) return ( <Login/>)

    return(
    <main>
      <div className="min-h-screen flex flex-col">
        <Header />

        

      </div>
    </main>
  );
}
