import React, { useState } from 'react';
import { Menu, X } from 'lucide-react'

const AsideMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative min-h-screen md:flex">
      <div className="bg-gray-800 text-gray-100 w-64 space-y-6 px-2 py-7 absolute inset-y-0 left-0 transform md:relative md:translate-x-0 transition-transform duration-200 ease-in-out" style={{ marginLeft: isOpen ? '0' : '-100%' }}>
        <button className="absolute top-0 right-0 p-4" onClick={() => setIsOpen(!isOpen)}>
          <X className="h-6 w-6 text-zinc-50"/>
        </button>
        <nav>
          <a href="#" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700">Item 1</a>
          <a href="#" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700">Item 2</a>
          <a href="#" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700">Item 3</a>
        </nav>
      </div>
      <div className="flex-1 p-10 text-2xl font-bold">
        <button className="bg-gray-800 text-gray-100 p-4" onClick={() => setIsOpen(!isOpen)}>
          <Menu className="h-6 w-6" />
        </button>
        Conteúdo
      </div>
    </div>
  );
};

export default AsideMenu;