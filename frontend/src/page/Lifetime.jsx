import React from 'react';
import { motion } from 'framer-motion';

export default function Lifetime() {
  const perks = [
    'Lifetime VIP status',
    'Annual complimentary retreat',
    '20% discount on all services',
    'Personalized concierge service',
    'Early access to exclusive events',
  ];

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <div className="min-h-screen flex flex-col items-center justify-center" style={{ backgroundColor: '#4e4e4e' }}>
        <div className="bg-[#b48261] text-white p-8 rounded-xl shadow-lg text-center max-w-md">
          <h1 className="text-4xl font-bold mb-4">Lifetime Membership</h1>
          <p className="text-xl mb-6">$999 (One-Time Payment)</p>
          <ul className="mb-6 space-y-2 text-left">
            {perks.map((perk, idx) => (
              <li key={idx}>✔ {perk}</li>
            ))}
          </ul>
          <button className="bg-white text-[#4e4e4e] px-6 py-3 rounded hover:bg-gray-100 transition">
            Become Lifetime Member
          </button>
        </div>
      </div>
    </motion.div>
  );
}
