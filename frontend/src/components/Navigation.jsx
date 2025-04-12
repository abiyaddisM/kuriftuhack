import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Navigation = ({ items }) => {
  const [selectedItem, setSelectedItem] = useState(null);
  const navigate = useNavigate();

  // Define route mappings (edit these to match your actual paths)
  const routeMap = {
    Home: '/',
    Shop: '/shop',
    Member: '/membership',
    Sim: '/refferals', // adjust this key if "Sim" is just a placeholder
  };

  const handleClick = (label, index) => {
    setSelectedItem(index);
    const path = routeMap[label];
    if (path) {
      navigate(path);
    }
  };

  return (
    <div className='w-fit flex justify-evenly gap-8 p-3 px-7 rounded-full bg-white'>
      {items.map((label, i) => (
        <button
          key={i}
          className={`w-fit rounded-full transition-colors duration-300 hover:cursor-pointer ${
            selectedItem === i ? 'bg-[#B48161] text-white' : 'bg-transparent text-[#4e4e4e]'
          }`}
          onClick={() => handleClick(label, i)}
          style={{ padding: '8px 16px' }}
        >
          {label}
        </button>
      ))}
    </div>
  );
};

export default Navigation;
