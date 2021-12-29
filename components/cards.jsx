import React from 'react'
import styles from '../styles/Card.module.css'
import buttonStyles from '../styles/ButtonStyles.module.css'
import Card from './card'
import Link from 'next/link'

const Cards = () => {
    return (
        <div className={styles.cards}>
            <h2>Co robimy?</h2>
            <div className={styles.cardBox}>
                <Card title='Zabezpieczenie antypoślizgowe' href="/" aClassName="icon-allwet-floor-sign-cleaning-warning"/>
                <Card title='Pomiar współczynnika tarcia dynamicznego oraz PTV' href="/pomiar" aClassName="icon-cleanwahadlo-ikona"/>
                <Card title='Doczyszczanie' href="/" aClassName="icon-allPIANO"/>
                <Card title='Odkamienianie' href="/" aClassName="icon-allwindow-cleaning-clean-housekeeper"/>
                <Card title='Impregnacja' href="/" aClassName="icon-allWIPER"/>
                <Card title='Nasze produkty' href="/" aClassName="icon-allMEGAPHONE"/>
            </div>
            <div className={`${buttonStyles.buttonStyles} ${styles.btn}`}><Link href='/'><a>Dowiedz się więcej >></a></Link></div>
        </div>
    )
}

export default Cards
