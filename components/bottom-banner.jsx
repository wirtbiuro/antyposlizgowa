import React from 'react'
import Banner from './banner'
import { phoneLink, phone } from '../constants'
import styles from '../styles/Common.module.css'
import Link from 'next/link'

const BottomBaner = () => {
    return (
        <Banner isFadeInUp={true} backgroundImage='url(/images/feet2.jpg)'>
        <div className={styles.bannerInner}>
                <div className={styles.center}>
                    <h1>Bestill en gratis måling av sklisikkerhet!</h1>
                    <h2>Ta kontakt med oss:</h2>
                    <div><Link href={phoneLink}><a>{phone}</a></Link></div>
                </div>
            </div>
        </Banner>
    )
}

export default BottomBaner
