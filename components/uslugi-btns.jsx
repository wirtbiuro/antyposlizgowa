import React from 'react'
import styles from '../styles/UslugiBtns.module.css'
import Link from 'next/link'

const UslugiBtns = () => {
    return (
        <div className={styles.uslugiBtns}>
            <div className={styles.col}><Link href='/protection'><a><h2>Zabezpieczenie antypoślizgowe</h2></a></Link></div>
            <div className={styles.col}><Link href='/friction-measurement'><a><h2>Pomiar współczynnika tarcia i PTV</h2></a></Link></div>
            <div className={styles.col}><Link href='/cleaning'><a><h2>Doczyszczanie powierzchni</h2></a></Link></div>
        </div>
    )
}

export default UslugiBtns
