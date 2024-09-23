import React from 'react'
import { client } from '../client';
import { chain } from "../chain";
import { ConnectButton } from "thirdweb/react";


function Login() {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen  text-center'>
<div className='flex flex-col items-center mb-10'>
<img className="rounded-full h-20 w-20"  
        src="/cas.png" />
        </div>
<div>
<h1 className='text-8xl text-white font-bold mb-8  '>Cypher lottery</h1>
  </div>

    <div >
         
    <ConnectButton 
      client={client}
      chain={chain}
      appMetadata={{
        name: "Cypher Lottery",
      }}
    />
  </div>
  
  </div>
  )
}

export default Login
