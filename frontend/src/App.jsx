
   
import { Button } from "@/components/ui/button"
import CoinInfo from "./components/CoinInfo"
import Dashboard from "./page/Dashboard/Dashboard"
import Home from "./page/Home"
import Shop from "./page/Shop/Shop";
import MembershipPlan from "./page/MambershipPlans";
import Refferal from "./page/Refferal";
import Layout from "./page/Layout";
import Silver from './page/Silver'
import Gold from './page/Gold'
import Platinum from './page/Platinum'
import Lifetime from './page/Lifetime'


import Navigation from "./components/Navigation"

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

export default function App() {
  return (
        <Router>
          <Routes  >
            <Route element={<Layout/>}>
            <Route path="/" element={<Dashboard />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/membership" element={<MembershipPlan />} />
            <Route path="/refferals" element={<Refferal />} />

            <Route path="/membership/silver" element={<Silver />} />
            <Route path="/membership/gold" element={<Gold />} />
            <Route path="/membership/platinum" element={<Platinum />} />
            <Route path="/membership/lifetime" element={<Lifetime />} />
            </Route>
          </Routes>
        </Router>
  )
}


