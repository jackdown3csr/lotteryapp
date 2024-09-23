import React from 'react';

interface Props {
    title: string;
    isActive?: boolean;
    onClick?: () => void;
}

function NavButton({ title, isActive, onClick }: Props) {
  return (
  <button 
  onClick={onClick}
  className={`${isActive && "bg-slate-600"} hover:bg-slate-600 py-2 px-2 rounded font-bold`}>
    {title}</button> );
  
}

export default NavButton;
