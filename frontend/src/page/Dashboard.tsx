import React, { useEffect, useState } from 'react'
import CoinInfo from '../components/CoinInfo';
import { Button } from '../components/ui/button';
import { Link } from 'lucide-react';
import {useNavigate} from 'react-router-dom'

const Dashboard = () => {

    const [loading, setLoading] = useState(true)
    useEffect(()=>{
        const timer = setTimeout(() => {
          setLoading(false); // Update the loading state to false
        }, 3000);
         return () => clearTimeout(timer);
    },[])

    if (loading){
        return (
          <div className="flex">
            <p className='text-3xl'>Welcome back, Mahlet</p>
          </div>
        );
    }

    const navigate = useNavigate()
    
    const gotoRefferal = () => {
        
    }

  return (
    <div className="h-full w-full flex flex-col justify-evenly">
        <h1 className='text-4xl font-bold text-accent'>Dashboard</h1>
      <div className="flex">
        <CoinInfo amount={3000} />
      </div>
      <div className="flex justify-evenly">
        <Button>Services available</Button>
        <Button>Perks and offers</Button>
        <Button>Membership Plans</Button>
        <Button>Shop</Button>
      </div>
      <div className="border border-secondary rounded-2xl p-8">
        <p className="text-3xl">Reffer this to someone....</p>
        <Link onClick={gotoRefferal}>Refferal link </Link>
      </div>
    </div>
  );
}

export default Dashboard