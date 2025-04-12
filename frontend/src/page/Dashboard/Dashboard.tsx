import React, { useEffect, useState } from 'react'
import CoinInfo from '../../components/CoinInfo';
import { Button } from '../../components/ui/button';
import { Link } from 'lucide-react';
import {useNavigate} from 'react-router-dom'
import styles from './Dashboard.module.css'
import DealsCard from '../../Components/Cards/DealsCard/dealsCard'
import logo from "./Vector (2).svg"


const Dashboard = () => {


  return (
    <div className={styles.container}>
      <div className={styles.key}>
      {/* <img src={logo} alt="" /> */}
        <p className={styles.number}>402</p>
        
        <p className={styles.name}>Mahlet Solomon </p>
      </div>
      <div className={styles.dash}>
        
        


      </div>
        
    </div>
  );
}

export default Dashboard