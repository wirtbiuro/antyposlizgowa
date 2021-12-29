import React from 'react'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

const HeaderBar = () => {
    return (
        <div className={styles.headerBar}>
            <div className={styles.headerBarInner}>
                <div><Link href='/'><a>ZADZWOŃ: 22 750 20 66</a></Link></div>
            </div>
        </div>
    )
}

export default HeaderBar
