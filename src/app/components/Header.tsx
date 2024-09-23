import React from 'react';
import NavButton from './NavButton';
import { Bars3BottomLeftIcon } from '@heroicons/react/24/solid';
import { useActiveAccount, useActiveWallet, useDisconnect } from 'thirdweb/react';
import { ConnectButton } from "thirdweb/react";
import { client } from '../client';
import { chain } from "../chain";


function Header() {
    const activeAccount = useActiveAccount();
    const wallet = useActiveWallet();
    const {disconnect} = useDisconnect();

return(
    <header className='grid grid-cols-2 md:grid-cols-5 justify-between 
    items-center p-5'>


        <div className='flex items-center space-x-2'>
        <img className="rounded-full h-20 w-20"  
        src="/cas.png" />
       
        <div>
            <h1 className='text-lg font-bold '>Cypher Draw</h1>
            <p className='text-xs text-gray-600 truncate'>User: {activeAccount?.address.substring(0,5)}...
                {activeAccount?.address.substring(activeAccount?.address.length,activeAccount?.address.length-5)} </p>
        </div>
        </div>
        <div className='hidden md:flex md:col-span-3 items-center justify-center rounded-md'>
            
            <div className='bg-gray-950 p-4 space-x-2'>
            <NavButton isActive title={"Buy Ticket"}/>
           
            </div>
        </div>
        

        <div className='flex flex-col ml-auto text-right'>
         
          <ConnectButton
            client={client}
            chain={chain}
            appMetadata={{
              name: "Example App",
              url: "https://example.com",
            }}
          />
        </div>
        
        
    </header>
  )
}

export default Header
