import React from 'react';

import { motion } from 'framer-motion';

export default function Gold() {
  const perks = [
    'Priority check-in & late checkout',
    'Complimentary spa session',
    '10% discount on services',
    'Access to gold-exclusive events',
  ];

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <div className="min-h-screen flex flex-col items-center justify-center" style={{ backgroundColor: '#f9eee2' }}>
        <div className="bg-white p-8 rounded-xl shadow-lg text-center max-w-md border border-[#b48261]">
          <h1 className="text-4xl font-bold mb-4 text-[#b48261]">Gold Membership</h1>
          <p className="text-xl mb-6 text-gray-700">$199 / Year</p>
          <ul className="text-gray-600 mb-6 space-y-2 text-left">
            {perks.map((perk, idx) => (
              <li key={idx}>✔ {perk}</li>
            ))}
          </ul>
          <button className="bg-[#b48261] text-white px-6 py-3 rounded hover:bg-[#9e664a] transition">
            Upgrade to Gold
          </button>
        </div>
      </div>
    </motion.div>
  );
}
