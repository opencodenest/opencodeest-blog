import './nav-bar.css'
import { useState } from 'react'

function NavBar() {
  return (
    <div className="min-h-16 flex items-center pl-4 border-b border-black/15 sticky top-0 bg-white">
      <h1 className="font-roboto font-bold text-2xl">
        OpenCode<span className="font-normal">Nest</span>
      </h1>
    </div>
  );
}

export default NavBar;
