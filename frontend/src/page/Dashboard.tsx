import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"; // shadcn cards
import { ArrowRight, Gift, Star, Sparkles } from "lucide-react"; // optional icons

export default function Dashboard() {
  const userPoints = 5000; // Fetch dynamically later

  const quickLinks = [
    {
      title: "Explore Services",
      description: "Redeem your points for unique experiences.",
      link: "/services",
      icon: <Sparkles className="h-6 w-6 text-[#b48261]" />,
    },
    {
      title: "Membership Plans",
      description: "Unlock higher tiers for better rewards.",
      link: "/membership",
      icon: <Star className="h-6 w-6 text-[#b48261]" />,
    },
    {
      title: "Offers & Discounts",
      description: "Get limited-time deals and special offers.",
      link: "/offers",
      icon: <Gift className="h-6 w-6 text-[#b48261]" />,
    },
    {
      title: "Points History",
      description: "Track your points earnings and spending.",
      link: "/history",
      icon: <ArrowRight className="h-6 w-6 text-[#b48261]" />,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="space-y-8"
    >
      {/* Points Display */}
      <motion.div variants={itemVariants}>
        <Card className="bg-[#f9eee2] border-none shadow-md">
          <CardHeader>
            <CardTitle className="text-2xl text-[#b48261]">
              Your Points Balance
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-4xl font-bold text-[#4e4e4e]">
              {userPoints} Points
            </p>
            <p className="text-gray-600 mt-2">
              Keep earning to unlock more rewards!
            </p>
          </CardContent>
        </Card>
      </motion.div>

      {/* Flash Offers */}
      <motion.div variants={itemVariants}>
        <Card className="bg-white border-none shadow-md">
          <CardHeader>
            <CardTitle className="text-xl text-[#4e4e4e]">
              Flash Offers 🔥
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">
              Check out today’s hot deals and save big on your next experience!
            </p>
            <Link
              to="/offers"
              className="inline-block mt-3 bg-[#b48261] text-white px-4 py-2 rounded hover:bg-[#9e664a] transition"
            >
              View Offers
            </Link>
          </CardContent>
        </Card>
      </motion.div>

      {/* Quick Links */}
      <motion.div variants={itemVariants}>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {quickLinks.map((item, index) => (
            <Link key={index} to={item.link}>
              <Card className="group hover:shadow-xl transition shadow-md bg-white border-none">
                <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                  <CardTitle className="text-lg text-[#4e4e4e]">
                    {item.title}
                  </CardTitle>
                  {item.icon}
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 group-hover:text-[#b48261] transition">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}
