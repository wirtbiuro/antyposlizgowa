import React from 'react'
import styles from '../styles/Common.module.css'
import Link from 'next/link'
import { phone, phoneLink } from '../constants'

const HeaderBar = () => {
    return (
        <div className={styles.headerBar}>
            <div className={styles.headerBarInner}>
                <div><Link href={phoneLink}><a>ZADZWOŃ: {phone}</a></Link></div>
            </div>
        </div>
    )
}

export default HeaderBar
