import React from 'react'
import styles from '../styles/UslugiBtns.module.css'

const UslugiBtns = () => {
    return (
        <div className={styles.uslugiBtns}>
            <div className={styles.col}><h2>Zabezpieczenie antypoślizgowe</h2></div>
            <div className={styles.col}><h2>Pomiar współczynnika tarcia i PTV</h2></div>
            <div className={styles.col}><h2>Doczyszczanie powierzchni</h2></div>
        </div>
    )
}

export default UslugiBtns
