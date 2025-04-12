import React from 'react';
import { Outlet } from 'react-router-dom'; // <-- Import this
import Navigation from '../components/Navigation';
import CoinInfo from '../components/CoinInfo'

const Layout = () => {
  return (
    <div className="min-h-screen w-full bg-primary flex flex-col relative">
        <div className=" w-full flex items-start mx-auto px-4 py-2 justify-between">
            <div className= 'w-full flex justify-center mx-auto'>
        <Navigation items={['Home', 'Shop', 'Member', 'Sim']} />
        </div>
        <CoinInfo amount={100} />
        </div>

      {/* Main Content Area */}
      <main className="flex-grow container mx-auto px-4 py-8">
        <Outlet /> {/* Renders the nested route components */}
      </main>
    </div>
  );
};

export default Layout;
