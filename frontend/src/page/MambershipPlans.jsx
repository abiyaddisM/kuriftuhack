import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function MembershipPlan() {
  const userPoints = 5000; // Later, fetch from API

  const plans = [
    {
      name: 'Silver',
      link: '/membership/silver',
      description: 'Priority check-in, welcome drink, and exclusive offers.',
      price: '$99 / Year',
      color: '#b48261',
      bg: '#f9eee2',
    },
    {
      name: 'Gold',
      link: '/membership/gold',
      description: 'Free spa session, 10% discounts, gold-only events.',
      price: '$199 / Year',
      color: '#b48261',
      bg: '#fff8f1',
    },
    {
      name: 'Platinum',
      link: '/membership/platinum',
      description: 'VIP check-in, concierge, 15% off services, retreats.',
      price: '$299 / Year',
      color: '#ffffff',
      bg: '#4e4e4e',
    },
    {
      name: 'Lifetime',
      link: '/membership/lifetime',
      description: 'Lifetime status, annual retreats, 20% discount.',
      price: '$999 One-Time',
      color: '#ffffff',
      bg: '#4e4e4e',
    },
  ];

  return (
    <motion.div
      initial={{ x: -50, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      className="min-h-screen"
    >
      <h2 className="text-4xl font-bold mb-2 text-center">Membership Plans 🌟</h2>
      <p className="text-center text-gray-600 mb-10 text-lg">
        Current Points: <strong>{userPoints}</strong>
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {plans.map((plan, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 300 }}
            className="rounded-xl shadow-lg overflow-hidden"
            style={{ backgroundColor: plan.bg }}
          >
            <div className="p-8 flex flex-col h-full justify-between">
              <div>
                <h3
                  className="text-3xl font-extrabold mb-3"
                  style={{ color: plan.color }}
                >
                  {plan.name}
                </h3>
                <p className="text-gray-700 mb-4">{plan.description}</p>
                <p className="font-semibold mb-6 text-lg">{plan.price}</p>
              </div>
              <Link
                to={plan.link}
                className="block text-center bg-[#b48261] text-white px-4 py-2 rounded-md hover:bg-[#9e664a] transition"
              >
                Explore {plan.name} Plan
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
