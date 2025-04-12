import React from 'react'
import DealsCard from '../../Components/Cards/DealsCard/dealsCard'
import Styles from "./Shop.module.css"
const Shop = () => {
  return (
    <div className={Styles.container}>
      <div className={Styles.p1}>
        <p className={Styles.head}>EXCLUSIVE DEALS</p>
        <div className={Styles.deals}>
          <DealsCard/>
          <DealsCard/>
          <DealsCard/>
          <DealsCard/>
        </div>
      </div>
      <div className={Styles.p1}>
        <p className={Styles.head}>MEMBERS ONLY</p>
        <div className={Styles.deals}>
          <DealsCard/>
          <DealsCard/>
          <DealsCard/>
          <DealsCard/>
        </div>
      </div>
      <div className={Styles.p1}>
        <p className={Styles.head}>EXCLUSIVE DEALS</p>
        <div className={Styles.deals}>
          <DealsCard/>
          <DealsCard/>
          <DealsCard/>
          <DealsCard/>
        </div>
      </div>
      

     
      

    </div>
  )
}

export default Shop