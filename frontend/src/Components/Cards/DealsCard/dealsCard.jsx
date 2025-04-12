import styles from "./dealsCard.module.css";




function DealsCard() {
    return(
        <>
        <div className={styles.container}>
            
            <div className={styles.one}>
                <p className={styles.pts}>10,000 P</p>
            </div>
            <div className={styles.two}>
                <div className={styles.info}>
                    <p className={styles.location}>Kuriftu Resort</p>
                    <p className={styles.date}>April 28 - May 22 2025</p>
                </div>
                <button className={styles.buy}>Buy</button>
            </div>
            
            
        </div>
    </>

    )
   
}

export default DealsCard;