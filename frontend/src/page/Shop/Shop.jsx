import React from 'react'
import DealsCard from '../../Components/Cards/DealsCard/dealsCard'
import Styles from "./Shop.module.css"
const Shop = () => {
  return (
    <div className={Styles.container}>
      <div className={Styles.p1}>
        <div className={Styles.grad}>
          <p className={Styles.head}>EXCLUSIVE DEALS</p>
        </div>
        <div className={Styles.deals}>
          <DealsCard/>
          <DealsCard/>
          <DealsCard/>
          <DealsCard/>
        </div>
      </div>

      <div className={Styles.p1}>
        <div className={Styles.grad}>
          <p className={Styles.head}>MEMBERS ONLY</p>
        </div>
        <div className={Styles.deals}>
          <DealsCard/>
          <DealsCard/>
          <DealsCard/>
          <DealsCard/>
        </div>
      </div>

      <div className={Styles.p1}>
        <div className={Styles.grad}>
          <p className={Styles.head}>dISCOUNTED ITEMS</p>
        </div>
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