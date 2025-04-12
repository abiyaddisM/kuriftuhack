import React from 'react';

import { motion } from 'framer-motion';

export default function Platinum() {
  const perks = [
    'VIP check-in & personal concierge',
    '2 free spa sessions per year',
    '15% discount on services',
    'Platinum-exclusive retreats',
  ];

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <div className="min-h-screen flex flex-col items-center justify-center bg-white">
        <div className="bg-[#4e4e4e] text-white p-8 rounded-xl shadow-lg text-center max-w-md">
          <h1 className="text-4xl font-bold mb-4 text-[#b48261]">Platinum Membership</h1>
          <p className="text-xl mb-6">$299 / Year</p>
          <ul className="mb-6 space-y-2 text-left">
            {perks.map((perk, idx) => (
              <li key={idx}>✔ {perk}</li>
            ))}
          </ul>
          <button className="bg-[#b48261] text-white px-6 py-3 rounded hover:bg-[#9e664a] transition">
            Upgrade to Platinum
          </button>
        </div>
      </div>
    </motion.div>
  );
}
