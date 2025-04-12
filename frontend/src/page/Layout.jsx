import React from 'react';
import { Outlet } from 'react-router-dom'; // <-- Import this
import Navigation from '../components/Navigation';

const Layout = () => {
  return (
    <div className="min-h-screen w-full bg-primary flex flex-col relative">
      <div className="fixed w-full flex flex-col items-center mx-auto px-4 py-2 z-10" >
  <Navigation items={['Home', 'Shop', 'Member', 'Sim']} />
</div>

      {/* Main Content Area */}
      <main className="flex-grow container mx-auto px-4 py-8 mt-20">
        <Outlet /> {/* Renders the nested route components */}
      </main>
    </div>
  );
};

export default Layout;
