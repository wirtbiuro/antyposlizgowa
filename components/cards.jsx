import React, { useEffect, useRef } from 'react'
import styles from '../styles/Card.module.css'
import buttonStyles from '../styles/ButtonStyles.module.css'
import Card from './card'
import Link from 'next/link'
import Animate from './animate'
import { links } from '../constants'

const Cards = () => {

    const h2Ref = useRef()
    const cardBoxRef = useRef()

    return (
        <div className={styles.cards}>
            <Animate elementRef={h2Ref} animationName='fadeInUp'/>
            <Animate elementRef={cardBoxRef} animationName='fadeInLeft10'/>
            <h2 ref={h2Ref}>Hva gjør vi? (Tjenester)</h2>
            <div className={styles.cardBox} ref={cardBoxRef}>
                <Card title='Sklisikring' href={`/${links.protection}`} aClassName="icon-allwet-floor-sign-cleaning-warning"/>
                <Card title='Måling av friksjonskoeffisient' href={`/${links.frictionMeasurement}`} aClassName="icon-cleanwahadlo-ikona"/>
                <Card title='Rengjøring' href={`/${links.cleaning}`} aClassName="icon-allPIANO"/>
                <Card title='Avkalking' href={`/${links.descaling}`} aClassName="icon-allwindow-cleaning-clean-housekeeper"/>
                <Card title='Impregnering' href={`/${links.impregnation}`} aClassName="icon-allWIPER"/>
                <Card title='Våre produkter' href={`/${links.products}`} aClassName="icon-allMEGAPHONE"/>
            </div>
            <div className={`${buttonStyles.buttonStyles} ${styles.btn}`}><Link href={`/${links.services}`}><a>Finn ut mer &gt;&gt;</a></Link></div>
        </div>
    )
}

export default Cards
